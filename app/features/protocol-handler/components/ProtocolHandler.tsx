'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, Link, ExternalLink } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProtocolHandler() {
  const [isSupported, setIsSupported] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [testUrl, setTestUrl] = useState('web+pwa://test-message')
  const [receivedUrl, setReceivedUrl] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if protocol handler is supported
    setIsSupported('registerProtocolHandler' in navigator)

    // Check if we received a URL parameter
    const url = searchParams.get('url')
    if (url) {
      setReceivedUrl(url)
    }

    // We can't reliably check if a protocol is already registered
    // So we'll just try to register it again
    try {
      if ('registerProtocolHandler' in navigator) {
        navigator.registerProtocolHandler(
          'web+pwa',
          `${window.location.origin}/features/protocol-handler?url=%s`
        )
        setIsRegistered(true)
      }
    } catch (error) {
      console.error('Failed to register protocol handler:', error)
    }
  }, [searchParams])

  const handleRegister = () => {
    try {
      navigator.registerProtocolHandler(
        'web+pwa',
        `${window.location.origin}/features/protocol-handler?url=%s`
      )
      setIsRegistered(true)
      alert(
        'Protocol handler registered successfully. You may need to approve it in your browser settings.'
      )
    } catch (error) {
      console.error('Failed to register protocol handler:', error)
      alert(
        `Failed to register protocol handler: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      )
    }
  }

  const handleTestLink = () => {
    // This will open the link in a new tab
    window.open(testUrl, '_blank')
  }

  if (!isSupported) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Not Supported</AlertTitle>
        <AlertDescription>Protocol handlers are not supported in your browser.</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {receivedUrl && (
        <Card className="border-green-200 bg-green-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-200">Protocol URL Received!</CardTitle>
            <CardDescription className="text-green-100">
              The application successfully handled a custom protocol URL
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="rounded border border-green-200 bg-neutral-800 p-2 font-mono text-sm break-all">
              {receivedUrl}
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-medium">Register Protocol Handler</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Register this PWA to handle{' '}
            <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">web+pwa://</code> URLs.
            This allows other applications to launch this PWA with custom data.
          </p>

          <Button
            onClick={handleRegister}
            disabled={isRegistered}
          >
            <Link className="mr-2 h-4 w-4" />
            {isRegistered ? 'Protocol Handler Registered' : 'Register Protocol Handler'}
          </Button>
        </div>

        <div className="border-t pt-4">
          <h3 className="mb-2 font-medium">Test Protocol Handler</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Test the protocol handler by clicking the link below. Your browser should ask if you
            want to open this app.
          </p>

          <div className="mb-4 space-y-2">
            <Label htmlFor="testUrl">Test URL</Label>
            <Input
              id="testUrl"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              placeholder="web+pwa://test-message"
            />
          </div>

          <Button
            onClick={handleTestLink}
            variant="outline"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open Test URL
          </Button>
        </div>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          Protocol handlers require different levels of user interaction across browsers. Some
          browsers may show a permission prompt, while others may silently ignore the registration.
        </AlertDescription>
      </Alert>
    </div>
  )
}
