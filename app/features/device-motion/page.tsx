import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DeviceMotionTracker } from './components/DeviceMotionTracker'

const DeviceMotionPage = () => {
  return (
    <>
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">Device Motion API</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Access device motion and acceleration data
        </p>
      </div>

      <DeviceMotionTracker />

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Documentation</CardTitle>
          <CardDescription>Understanding the Device Motion API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">What is the Device Motion API?</h3>
              <p className="text-muted-foreground text-sm">
                The Device Motion API provides access to the device's motion and acceleration data.
                It allows web applications to respond to device movement, including acceleration,
                rotation, and gravity effects.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Key Features</h3>
              <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                <li>Access device acceleration data</li>
                <li>Measure rotation rates</li>
                <li>Include/exclude gravity effects</li>
                <li>Real-time motion updates</li>
                <li>Permission-based access control</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Browser Support</h3>
              <p className="text-muted-foreground text-sm">
                The Device Motion API is supported in most modern browsers on mobile devices. Some
                browsers may require HTTPS and explicit user permission.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Best Practices</h3>
              <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                <li>Always check for API support</li>
                <li>Request permissions when needed</li>
                <li>Handle null values gracefully</li>
                <li>Clean up event listeners</li>
                <li>Consider device compatibility</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Example Use Cases</h3>
              <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                <li>Motion-based games</li>
                <li>Fitness tracking apps</li>
                <li>Gesture recognition</li>
                <li>Device movement detection</li>
                <li>Interactive experiences</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default DeviceMotionPage
