import VibrationExample from './components/VibrationExample'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Info } from 'lucide-react'

const VibrationPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">Vibration API</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          The Vibration API provides a way to control the vibration mechanism of the hosting device.
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          The Vibration API is supported in most modern browsers. Check the browser compatibility
          before implementing.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Demo</CardTitle>
          <CardDescription>Try out different vibration patterns and durations</CardDescription>
        </CardHeader>
        <CardContent>
          <VibrationExample />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>Reference guide for the Vibration API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Methods</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <code>navigator.vibrate(duration)</code> - Vibrate for specified milliseconds
              </li>
              <li>
                <code>navigator.vibrate(pattern)</code> - Vibrate following a pattern array
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Parameters</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <code>duration</code> - Number of milliseconds to vibrate
              </li>
              <li>
                <code>pattern</code> - Array of numbers representing vibration and pause intervals
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VibrationPage
