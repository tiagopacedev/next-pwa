import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SpeechRecognitionExample from './components/SpeechRecognitionExample'

const SpeechRecognitionPage = () => {
  return (
    <>
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">Speech Recognition API</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Convert speech to text with real-time transcription
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SpeechRecognitionExample />

        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Understanding the Speech Recognition API</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">What is the Speech Recognition API?</h3>
                <p className="text-muted-foreground text-sm">
                  The Speech Recognition API enables web applications to convert spoken language
                  into text. It provides real-time transcription with support for multiple languages
                  and continuous recognition modes.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Key Features</h3>
                <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                  <li>Real-time speech-to-text conversion</li>
                  <li>Multiple language support</li>
                  <li>Continuous and single utterance modes</li>
                  <li>Confidence scoring</li>
                  <li>Interim results</li>
                  <li>Error handling</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Browser Support</h3>
                <p className="text-muted-foreground text-sm">
                  The Speech Recognition API is supported in most modern browsers. Some browsers may
                  require HTTPS and explicit user permission.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Best Practices</h3>
                <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                  <li>Check for API support</li>
                  <li>Request microphone permissions</li>
                  <li>Handle recognition errors</li>
                  <li>Provide visual feedback</li>
                  <li>Consider user privacy</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Example Use Cases</h3>
                <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
                  <li>Voice commands</li>
                  <li>Dictation tools</li>
                  <li>Voice search</li>
                  <li>Accessibility features</li>
                  <li>Language learning apps</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SpeechRecognitionPage
