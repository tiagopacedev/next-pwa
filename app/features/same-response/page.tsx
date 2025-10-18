import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ResponsesAreSameExample from './components/ResponsesAreSameExample'

const SameResponsePage = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Compare Responses</h1>
        <p className="text-muted-foreground">
          Test how service workers can compare responses using responsesAreSame
        </p>
      </div>
      <ResponsesAreSameExample />
    </div>
  )
}

export default SameResponsePage
