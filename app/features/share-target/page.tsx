import ShareTargetExample from './components/ShareTargetExample'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Web Share Target API</h1>
        <p className="text-muted-foreground text-lg">
          Allow your web app to receive shared content from other apps
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>About Web Share Target</AlertTitle>
        <AlertDescription>
          The Web Share Target API enables PWAs to receive shared content from other applications,
          similar to native apps. This includes text, URLs, and files.
        </AlertDescription>
      </Alert>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Documentation & Resources</CardTitle>
            <CardDescription>Learn more about implementing Web Share Target</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/share_target"
                target="_blank"
                className="hover:bg-muted block rounded-lg border p-6 transition-colors"
              >
                <h3 className="mb-2 font-semibold">MDN Web Docs</h3>
                <p className="text-muted-foreground text-sm">
                  Official documentation for Web Share Target API on MDN
                </p>
              </Link>

              <Link
                href="https://w3c.github.io/web-share-target/"
                target="_blank"
                className="hover:bg-muted block rounded-lg border p-6 transition-colors"
              >
                <h3 className="mb-2 font-semibold">W3C Specification</h3>
                <p className="text-muted-foreground text-sm">
                  Web Share Target API specification from W3C
                </p>
              </Link>
            </div>
          </CardContent>
        </Card>

        <ShareTargetExample />
      </div>
    </div>
  )
}

export default Page
