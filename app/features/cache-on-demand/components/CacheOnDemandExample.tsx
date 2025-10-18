'use client'

import { useState } from 'react'
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

export default function CacheOnDemandExample() {
  const [isComplete, setIsComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCacheContent = async () => {
    setIsLoading(true)
    try {
      const res = await window.serwist.messageSW({ action: 'cache-on-demand' })
      setIsComplete(res)
    } catch (error) {
      console.error('Failed to cache content:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Card>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This demo shows how to cache specific content on demand using the Service Worker API.
            The content will be available offline after caching.
          </p>

          <div className="bg-muted rounded-md p-4">
            <h3 className="mb-2 font-medium">How it works:</h3>
            <ul className="text-muted-foreground list-disc space-y-1 pl-6 text-sm">
              <li>Click the button to cache an image</li>
              <li>The image will be stored in the browser's cache</li>
              <li>Try accessing the image page while offline</li>
              <li>The cached content will be served from the Service Worker</li>
            </ul>
          </div>

          <Button
            onClick={handleCacheContent}
            disabled={isLoading || isComplete}
            className="w-full sm:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            {isLoading ? 'Caching...' : 'Cache Image'}
          </Button>

          {isComplete && (
            <Alert className="bg-green-50 dark:bg-green-900/20">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <AlertDescription className="space-y-4">
                <p>Image cached successfully!</p>
                <img
                  src="/images/cache-me-outside.jpg"
                  alt="Cached image"
                  className="mx-auto w-full max-w-md rounded-lg shadow-md"
                />
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </>
  )
}
