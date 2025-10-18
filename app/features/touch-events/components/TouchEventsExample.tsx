'use client'

import { useTouchEvents } from '@/app/features/touch-events/useTouchEvents'
import { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent, CardDescription } from '@/components/ui/card'
import { Alert } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TouchEventsExample = () => {
  const { scale, bind, resetScale } = useTouchEvents()
  const [isSupported, setIsSupported] = useState(true)

  useEffect(() => {
    setIsSupported('ontouchstart' in window)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === '+' || e.key === '=') {
      e.preventDefault()
      // Zoom in
    } else if (e.key === '-') {
      e.preventDefault()
      // Zoom out
    } else if (e.key === 'r') {
      e.preventDefault()
      resetScale()
    }
  }

  return (
    <div
      className="space-y-6"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Touch events demonstration"
    >
      {!isSupported && (
        <Alert
          variant="destructive"
          className="mb-6"
        >
          <AlertCircle className="h-4 w-4" />
          <p>This feature requires a touch-enabled device.</p>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <Badge
          variant="secondary"
          className="text-lg"
        >
          Scale: {scale.toFixed(2)}x
        </Badge>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={resetScale}
            aria-label="Reset zoom"
            title="Reset zoom (R)"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Interactive Demo</h3>
          <CardDescription>
            Try pinching to zoom in and out, or use keyboard shortcuts (+/-/R)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative flex h-96 w-full items-center justify-center overflow-hidden">
            <div
              {...bind}
              className="flex h-full w-full items-center justify-center"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out'
              }}
            >
              <div className="text-center">
                <div className="mb-4 animate-bounce">
                  <svg
                    className="text-primary mx-auto h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <p className="mb-2 text-xl font-semibold">Pinch to zoom</p>
                <p className="text-muted-foreground text-sm">
                  Use two fingers to zoom in/out or press R to reset
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TouchEventsExample
