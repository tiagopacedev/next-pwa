import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ScreenWakeExamle from './components/ScreenWakeExamle'

// Type definitions for Wake Lock API

const ScreenWakeLockPage = () => {
  return (
    <>
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">Screen Wake Lock API</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Keep your screen awake and monitor power usage
        </p>
      </div>
      <ScreenWakeExamle />

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Documentation</CardTitle>
          <CardDescription>Understanding the Screen Wake Lock API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">What is the Screen Wake Lock API?</h3>
              <p className="text-muted-foreground text-sm">
                The Screen Wake Lock API provides a way to prevent the screen from turning off or
                dimming. This is useful for applications that need to keep the screen active, such
                as video players, presentations, or interactive experiences.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Key Features</h3>
              <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                <li>Prevent screen from turning off</li>
                <li>Monitor wake lock state</li>
                <li>Handle system events (screen lock, power save)</li>
                <li>Battery level monitoring</li>
                <li>Auto-release functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Browser Support</h3>
              <p className="text-muted-foreground text-sm">
                The Screen Wake Lock API is supported in Chrome, Edge, and other Chromium-based
                browsers. It requires HTTPS or localhost for security reasons.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Best Practices</h3>
              <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                <li>Request wake lock only when necessary</li>
                <li>Release wake lock when no longer needed</li>
                <li>Handle wake lock release events</li>
                <li>Consider battery impact</li>
                <li>Provide user control over wake lock</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Example Use Cases</h3>
              <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                <li>Video players and streaming applications</li>
                <li>Interactive presentations</li>
                <li>Navigation applications</li>
                <li>Fitness tracking apps</li>
                <li>Real-time monitoring dashboards</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ScreenWakeLockPage
