import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Camera, Video, Mic, Shield, Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MediaCaptureExample } from './components/MediaCaptureExample'
import { ScreenCaptureExample } from './components/ScreenCaptureExample'
import { AudioCaptureExample } from './components/AudioCaptureExample'

export const metadata: Metadata = {
  title: 'Media Capture API | Modern Web Features',
  description:
    'Learn about the Media Capture API and how to implement camera, microphone, and screen capture in web applications'
}

export default function MediaCapturePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:gap-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Media Capture API</h1>
          <p className="text-muted-foreground max-w-[700px]">
            Access and control media capture devices like cameras, microphones, and screen sharing
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices"
              target="_blank"
            >
              MDN Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-8 sm:mt-12 lg:mt-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Media Capture</h2>
            <p className="text-muted-foreground">
              The Media Capture API provides access to media capture devices and allows web
              applications to capture audio, video, and screen content. This guide covers the main
              features and best practices for implementing media capture in your applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Card className="max-w-[400px] min-w-[280px] flex-1">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <Camera className="text-primary h-5 w-5" />
                  <CardTitle>Camera Access</CardTitle>
                </div>
                <CardDescription>Capture photos and video from device cameras</CardDescription>
              </CardHeader>
            </Card>
            <Card className="max-w-[400px] min-w-[280px] flex-1">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <Mic className="text-primary h-5 w-5" />
                  <CardTitle>Microphone</CardTitle>
                </div>
                <CardDescription>Record audio from device microphones</CardDescription>
              </CardHeader>
            </Card>
            <Card className="max-w-[400px] min-w-[280px] flex-1">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <Video className="text-primary h-5 w-5" />
                  <CardTitle>Screen Capture</CardTitle>
                </div>
                <CardDescription>Capture screen content and browser tabs</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Implementation Examples</h2>
            <p className="text-muted-foreground">
              Explore practical examples of how to use different media capture features in
              real-world scenarios.
            </p>
          </div>

          <Tabs
            defaultValue="camera"
            className="w-full"
          >
            <TabsList className="flex w-full flex-wrap">
              <TabsTrigger
                value="camera"
                className="min-w-[120px] flex-1"
              >
                Camera
              </TabsTrigger>
              <TabsTrigger
                value="screen"
                className="min-w-[120px] flex-1"
              >
                Screen
              </TabsTrigger>
              <TabsTrigger
                value="audio"
                className="min-w-[120px] flex-1"
              >
                Audio
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="camera"
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Camera Capture Example</CardTitle>
                  <CardDescription>Capture photos and video from device camera</CardDescription>
                </CardHeader>
                <CardContent>
                  <MediaCaptureExample />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="screen"
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Screen Capture Example</CardTitle>
                  <CardDescription>Capture screen content and browser tabs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScreenCaptureExample />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="audio"
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Audio Capture Example</CardTitle>
                  <CardDescription>Record audio from device microphone</CardDescription>
                </CardHeader>
                <CardContent>
                  <AudioCaptureExample />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <p className="text-muted-foreground">
              Follow these guidelines to implement media capture effectively in your applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Card className="max-w-[600px] min-w-[300px] flex-1">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="text-primary h-5 w-5" />
                  <CardTitle>Performance Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Request appropriate resolution and frame rate for your use case</li>
                  <li>Release media streams when they're no longer needed</li>
                  <li>Handle device changes and disconnections gracefully</li>
                  <li>Implement proper error handling for device access</li>
                  <li>Consider using WebRTC for real-time communication</li>
                  <li>Optimize video quality based on network conditions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="max-w-[600px] min-w-[300px] flex-1">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="text-primary h-5 w-5" />
                  <CardTitle>Security & Privacy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Always request user permission before accessing media devices</li>
                  <li>Use HTTPS for secure media capture</li>
                  <li>Implement proper access controls for your application</li>
                  <li>Handle device permissions appropriately</li>
                  <li>Consider implementing device selection for multiple devices</li>
                  <li>Provide clear feedback when devices are in use</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Error Handling and Edge Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="min-w-[300px] flex-1">
                  <h3 className="mb-2 text-lg font-medium">Common Issues</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Device permission denied</li>
                    <li>Device not found or disconnected</li>
                    <li>Insufficient system resources</li>
                    <li>Browser compatibility differences</li>
                    <li>Multiple device handling</li>
                  </ul>
                </div>
                <div className="min-w-[300px] flex-1">
                  <h3 className="mb-2 text-lg font-medium">Handling Strategies</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Implement proper error handling for device access</li>
                    <li>Provide fallback options when devices are unavailable</li>
                    <li>Handle device changes and reconnections</li>
                    <li>Implement proper cleanup of media streams</li>
                    <li>Use feature detection for browser compatibility</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
