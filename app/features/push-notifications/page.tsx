'use client'

import { Button } from '@/components/ui/button'
import { PushNotificationManager } from './components/PushNotificationManager'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <Card>
        <CardHeader>
          <CardTitle>Clear Badge notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="secondary"
            onClick={() => {
              navigator.clearAppBadge?.()
              navigator.serviceWorker.controller?.postMessage({ type: 'RESET_BADGE' })
            }}>
            Clean Badge
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
