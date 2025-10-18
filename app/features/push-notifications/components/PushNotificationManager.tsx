'use client'

import { useEffect, useState } from 'react'
import { sendNotification, subscribeUser, unsubscribeUser } from '../actions/push-notification'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true)
      registerServiceWorker()
    }
  }, [])

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none'
    })
    const sub = await registration.pushManager.getSubscription()
    setSubscription(sub)
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!)
    })
    setSubscription(sub)
    const serializedSub = JSON.parse(JSON.stringify(sub))
    await subscribeUser(serializedSub)
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe()
    setSubscription(null)
    await unsubscribeUser()
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message)
      setMessage('')
    }
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>
  }

  return (
    <Card className="border-border/50 mb-4 border shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg font-semibold">Push Notifications</CardTitle>
        <CardDescription>Manage your subscription and send a test notification</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {subscription ? (
          <>
            <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
              <span className="flex items-center gap-2">
                <div className="size-2.5 animate-pulse rounded-full bg-green-500" />
                You are currently subscribed to notifications
              </span>
              <Button
                variant="destructive"
                onClick={unsubscribeFromPush}>
                Unsubscribe
              </Button>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Input
                placeholder="Type a test message..."
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button onClick={sendTestNotification}>Send Test</Button>
            </div>
          </>
        ) : (
          <div className="border-border/60 flex flex-col items-center justify-center rounded-lg border border-dashed py-6 text-center">
            <p className="text-muted-foreground mb-3 text-sm">You are not subscribed yet</p>
            <Button
              onClick={subscribeToPush}
              className="w-36">
              Subscribe Now
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
