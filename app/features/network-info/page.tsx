import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import NetworkInfo from './components/NetworkInfo'

export default function NetworkInfoPage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Network Information</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Connection Status</CardTitle>
          <CardDescription>
            Monitor your device's network connection type and status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NetworkInfo />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About Network Information in PWAs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Network Information API allows web applications to access information about the
            network connection the user is using. This enables adaptive experiences based on network
            quality.
          </p>

          <div className="bg-muted rounded-md p-4">
            <h3 className="mb-2 font-medium">Key Features:</h3>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>Detect online/offline status</li>
              <li>Determine connection type (wifi, cellular, etc.)</li>
              <li>Access effective connection type (4g, 3g, 2g, slow-2g)</li>
              <li>Get estimated bandwidth and round-trip time</li>
              <li>Receive notifications when network conditions change</li>
            </ul>
          </div>

          <p className="text-muted-foreground text-sm">
            Note: The Network Information API has varying levels of support across browsers. Basic
            online/offline detection is widely supported, while detailed connection information may
            not be available in all browsers.
          </p>
        </CardContent>
      </Card>
    </>
  )
}
