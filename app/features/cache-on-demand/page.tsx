import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CacheOnDemandExample from './components/CacheOnDemandExample'
import CacheUrlsExample from './components/CacheUrlsExample'

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Cache Content On Demand</h1>
        <p className="text-muted-foreground">
          Cache specific content for offline access using the Service Worker API
        </p>
      </div>
      <CacheOnDemandExample />
      <CacheUrlsExample />
      <Card>
        <CardHeader>
          <CardTitle>About Cache On Demand</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Cache on demand is a powerful feature of Progressive Web Apps that allows you to:
          </p>
          <ul className="text-muted-foreground list-disc space-y-1 pl-6">
            <li>Cache specific content when needed</li>
            <li>Optimize storage usage by caching only required resources</li>
            <li>Provide offline access to important content</li>
            <li>Improve performance by serving cached content instantly</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
