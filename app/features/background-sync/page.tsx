import type { Metadata } from 'next'
import { ArrowRight, CloudDownload } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BackgroundSyncExample } from './components/BackgroundSyncExample'

export const metadata: Metadata = {
  title: 'Background Sync | Modern Web Features',
  description: 'Learn how to implement background sync for offline-first web applications'
}

export default function BackgroundSyncPage() {
  return (
    <>
      <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:gap-8">
        <div className="w-full space-y-2 md:w-auto">
          <h1 className="text-3xl font-bold tracking-tight">Background Sync</h1>
          <p className="text-muted-foreground max-w-[700px] text-sm sm:text-base">
            Queue tasks for background synchronization when offline and automatically sync when back
            online
          </p>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <Button
            asChild
            className="w-full text-sm sm:text-base md:w-auto"
          >
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/API/Background_Sync_API"
              target="_blank"
            >
              MDN Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-6 space-y-8 sm:mt-8 lg:mt-12">
        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Implementation Example</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              This example demonstrates how to implement background sync for offline-first web
              applications. Tasks are queued when offline and automatically synchronized when the
              connection is restored.
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CloudDownload className="text-primary h-5 w-5" />
                <CardTitle>Task Queue</CardTitle>
              </div>
              <CardDescription>
                Add tasks while offline and watch them sync automatically when back online
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BackgroundSyncExample />
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">How It Works</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              The Background Sync API allows web applications to queue tasks for background
              synchronization when offline and automatically sync when the connection is restored.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Worker</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                  <li>Registers a background sync queue</li>
                  <li>Handles fetch events for task sync</li>
                  <li>Queues failed requests for retry</li>
                  <li>Notifies clients of successful syncs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Client Side</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                  <li>Manages task state and UI</li>
                  <li>Handles online/offline status</li>
                  <li>Listens for sync messages</li>
                  <li>Updates UI based on sync status</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
