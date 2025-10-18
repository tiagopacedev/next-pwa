'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileWarning } from 'lucide-react'

const ShareTargetExample = () => {
  const [sharedData, setSharedData] = useState<{
    text?: string
    url?: string
    files?: File[]
  }>({})

  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search)
    const text = params.get('text')
    const url = params.get('url')

    // Get shared files if any
    const getSharedFiles = async () => {
      try {
        const formData = await (window as any).shareTargetFiles
        if (formData) {
          const files = formData.getAll('lists')
          setSharedData((prev) => ({ ...prev, files }))
        }
      } catch (error) {
        console.error('Error getting shared files:', error)
      }
    }

    if (text || url) {
      setSharedData({ text: text || undefined, url: url || undefined })
    }

    getSharedFiles()
  }, [])

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle>Share Target Example</CardTitle>
        <CardDescription>
          This page demonstrates the Web Share Target API functionality
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!sharedData.text && !sharedData.url && (!sharedData.files || !sharedData.files.length) ? (
          <div className="text-muted-foreground flex flex-col items-center justify-center p-6 text-center">
            <FileWarning className="mb-4 h-12 w-12" />
            <p>No shared content received yet. Try sharing some content to this app.</p>
          </div>
        ) : (
          <>
            {sharedData.text && (
              <div>
                <h3 className="mb-2 font-medium">Shared Text:</h3>
                <p className="text-muted-foreground">{sharedData.text}</p>
              </div>
            )}
            {sharedData.url && (
              <div>
                <h3 className="mb-2 font-medium">Shared URL:</h3>
                <a
                  href={sharedData.url}
                  className="text-primary break-all hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sharedData.url}
                </a>
              </div>
            )}
            {sharedData.files && sharedData.files.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium">Shared Files:</h3>
                <ul className="text-muted-foreground list-inside list-disc">
                  {sharedData.files.map((file, index) => (
                    <li key={index}>
                      {file.name} ({file.type}) - {(file.size / 1024).toFixed(2)}KB
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default ShareTargetExample
