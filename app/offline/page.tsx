import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { WifiOff } from 'lucide-react'
import Link from 'next/link'

export default function OfflinePage() {
  return (
    <Card className="mx-auto flex min-h-[50vh] max-w-md items-center justify-center bg-neutral-950 shadow-sm shadow-neutral-100/50">
      <CardHeader className="text-center">
        <WifiOff className="text-muted-foreground mx-auto mb-2 h-12 w-12" />
        <CardTitle className="text-2xl">You're Offline</CardTitle>
      </CardHeader>
      <CardContent className="mx-auto space-y-4 text-center">
        <p>
          You appear to be offline. Don't worry - you can still access cached content and use many
          features of the app.
        </p>
        <Button asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
