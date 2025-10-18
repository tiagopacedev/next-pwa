import { Info } from 'lucide-react'
import BadgeApiExample from './components/BadgeApiExample'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const BadgePage: React.FC = () => {
  return (
    <div className="container mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Badge API</h1>
        <p className="text-muted-foreground text-base">
          Comprehensive guide to the Badge component's API and usage.
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Badge Component</AlertTitle>
        <AlertDescription>
          Explore the versatile Badge component with various styling options and interactive
          examples.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Demo</CardTitle>
          <CardDescription>Explore Badge component functionality and variants</CardDescription>
        </CardHeader>
        <CardContent>
          <BadgeApiExample />
        </CardContent>
      </Card>
    </div>
  )
}

export default BadgePage
