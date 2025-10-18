import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Database, HardDrive, Clock, Shield, Zap, Server } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StorageComparison } from './components/StorageComparison'
import { LocalStorageExample } from './components/LocalStorageComparison'
import { IndexedDBExample } from './components/IndexedDBExample'
import { CacheAPIExample } from './components/CacheApiExample'
import { FileSystemExample } from './components/FileSystemExample'

export const metadata: Metadata = {
  title: 'Web Storage API | Modern Web Features',
  description:
    'Comprehensive guide to Web Storage APIs including localStorage, sessionStorage, IndexedDB, and Cache API'
}

export default function StorageAPIPage() {
  return (
    <div>
      <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:gap-8">
        <div className="w-full space-y-2 md:w-auto">
          <h1 className="text-3xl font-bold tracking-tight">Web Storage APIs</h1>
          <p className="text-muted-foreground max-w-[700px] text-sm sm:text-base">
            A comprehensive guide to storing and managing data in web applications
          </p>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <Button
            asChild
            className="w-full text-sm sm:text-base md:w-auto"
          >
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
              target="_blank"
            >
              MDN Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6 lg:mt-12 lg:space-y-8">
        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Introduction to Web Storage
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Web Storage APIs provide mechanisms for storing data in the browser, enabling web
              applications to work offline, improve performance, and enhance user experience. This
              guide covers the main storage options available to web developers.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Card className="flex min-w-72 flex-1 flex-col justify-between">
              <CardHeader className="flex-grow space-y-1">
                <div className="flex items-center gap-2">
                  <HardDrive className="text-primary h-5 w-5" />
                  <CardTitle>localStorage</CardTitle>
                </div>
                <CardDescription>
                  Persistent key-value storage that survives browser restarts
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex min-w-72 flex-1 flex-col justify-between">
              <CardHeader className="flex-grow space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary h-5 w-5" />
                  <CardTitle>sessionStorage</CardTitle>
                </div>
                <CardDescription>
                  Temporary storage that lasts for the duration of the page session
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex min-w-72 flex-1 flex-col justify-between">
              <CardHeader className="flex-grow space-y-1">
                <div className="flex items-center gap-2">
                  <Database className="text-primary h-5 w-5" />
                  <CardTitle>IndexedDB</CardTitle>
                </div>
                <CardDescription>
                  Client-side database for storing significant amounts of structured data
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex min-w-72 flex-1 flex-col justify-between">
              <CardHeader className="flex-grow space-y-1">
                <div className="flex items-center gap-2">
                  <Server className="text-primary h-5 w-5" />
                  <CardTitle>Cache API</CardTitle>
                </div>
                <CardDescription>
                  Storage for network request and response pairs, ideal for offline access
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Storage API Comparison</h2>
            <p className="text-muted-foreground">
              Different storage mechanisms are suited for different use cases. This comparison helps
              you choose the right storage option for your application needs.
            </p>
          </div>

          <StorageComparison />
        </section>

        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Implementation Examples
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Explore practical examples of how to use different storage APIs in real-world
              scenarios.
            </p>
          </div>

          <Tabs
            defaultValue="local-storage"
            className="w-full"
          >
            <TabsList className="flex w-full flex-wrap text-sm sm:text-base">
              <TabsTrigger
                value="local-storage"
                className="min-w-[120px] flex-1"
              >
                localStorage
              </TabsTrigger>
              <TabsTrigger
                value="indexed-db"
                className="min-w-[120px] flex-1"
              >
                IndexedDB
              </TabsTrigger>
              <TabsTrigger
                value="cache-api"
                className="min-w-[120px] flex-1"
              >
                Cache API
              </TabsTrigger>
              <TabsTrigger
                value="file-system"
                className="min-w-[120px] flex-1"
              >
                File System
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="local-storage"
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>User Preferences with localStorage</CardTitle>
                  <CardDescription>
                    Store and retrieve user preferences using the localStorage API
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <LocalStorageExample />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="indexed-db"
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Offline-Capable Notes App with IndexedDB</CardTitle>
                  <CardDescription>
                    Create, read, update, and delete notes that work offline using IndexedDB
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <IndexedDBExample />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="cache-api"
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Offline Content with Cache API</CardTitle>
                  <CardDescription>
                    Cache API and Service Workers for offline access to content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CacheAPIExample />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="file-system"
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>File Management with File System Access API</CardTitle>
                  <CardDescription>
                    Read, write, and manage files on the user's device
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FileSystemExample />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Best Practices</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Follow these guidelines to implement storage effectively in your applications.
            </p>
          </div>

          <div className="flex flex-wrap items-stretch gap-4 sm:gap-6">
            <Card className="flex max-w-full min-w-72 flex-1 flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="text-primary h-5 w-5" />
                  <CardTitle className="text-lg sm:text-xl">Performance Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                  <li>Store only what you need; avoid storing large objects in localStorage</li>
                  <li>Use IndexedDB for large datasets instead of localStorage</li>
                  <li>Implement pagination when retrieving large datasets from IndexedDB</li>
                  <li>Use structured cloning for complex objects in IndexedDB</li>
                  <li>Batch database operations for better performance</li>
                  <li>
                    Consider using web workers for database operations to avoid blocking the main
                    thread
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="flex max-w-full min-w-72 flex-1 flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="text-primary h-5 w-5" />
                  <CardTitle className="text-lg sm:text-xl">Security Considerations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                  <li>
                    Never store sensitive information like passwords or tokens in localStorage
                  </li>
                  <li>
                    Be aware that all client-side storage is accessible to JavaScript on your domain
                  </li>
                  <li>Implement proper input validation to prevent XSS attacks</li>
                  <li>Consider encrypting sensitive data before storing it</li>
                  <li>Implement proper access controls for your application</li>
                  <li>Be mindful of storage quotas and handle quota exceeded errors</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Error Handling and Edge Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="max-w-full min-w-72 flex-1">
                  <h3 className="mb-2 text-base font-medium sm:text-lg">Common Errors</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm sm:text-base">
                    <li>Storage quota exceeded</li>
                    <li>Private browsing mode limitations</li>
                    <li>Concurrent access issues</li>
                    <li>Browser compatibility differences</li>
                    <li>Data corruption or schema migration issues</li>
                  </ul>
                </div>
                <div className="max-w-full min-w-72 flex-1">
                  <h3 className="mb-2 text-base font-medium sm:text-lg">Handling Strategies</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm sm:text-base">
                    <li>Implement try/catch blocks around storage operations</li>
                    <li>Check for storage availability before using it</li>
                    <li>Provide fallback mechanisms when storage is unavailable</li>
                    <li>Implement data versioning for schema migrations</li>
                    <li>Use feature detection instead of browser detection</li>
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
