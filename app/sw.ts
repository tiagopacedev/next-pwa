import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist'
import { Serwist } from 'serwist'
import { defaultCache } from '@serwist/next/worker'
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined
  }
}
declare const self: ServiceWorkerGlobalScope

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  precacheOptions: {
    cleanupOutdatedCaches: true
  },
  runtimeCaching: [...defaultCache],
  skipWaiting: true,
  clientsClaim: true,
  offlineAnalyticsConfig: true,
  disableDevLogs: true,
  importScripts: ['/periodic-sw.js'],
  fallbacks: {
    entries: [
      {
        url: '/offline',
        matcher({ request }) {
          return request.destination === 'document'
        }
      }
    ]
  }
})

serwist.addEventListeners()

async function getBadgeCount() {
  const cache = await caches.open('badge-cache')
  const response = await cache.match('count')
  return response ? parseInt(await response.text(), 10) : 0
}

async function setBadgeCount(count: number) {
  const cache = await caches.open('badge-cache')
  await cache.put('count', new Response(String(count)))
}

self.addEventListener('push', async (event) => {
  if (!event.data) return

  let count = await getBadgeCount()
  count++

  await setBadgeCount(count)

  if ('setAppBadge' in navigator) {
    try {
      await navigator.setAppBadge(count)
    } catch (err) {
      console.error('Failed to set badge:', err)
    }
  }

  const data = event.data.json()
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || '/icon.png'
    })
  )

  const clientsList = await self.clients.matchAll()
  clientsList.forEach((client) => client.postMessage({ type: 'SET_BADGE', count }))
})

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.')
  event.notification.close()
  event.waitUntil(self.clients.openWindow(self.location.origin))
})

self.addEventListener('message', async (event) => {
  if (event.data?.type === 'RESET_BADGE') {
    const cache = await caches.open('badge-cache')
    await cache.delete('count')
    // Optionally reset app badge
    if ('clearAppBadge' in navigator) {
      try {
        await navigator.clearAppBadge()
      } catch (err) {
        console.error('Failed to clear badge:', err)
      }
    }
    // Notify clients
    const clientsList = await self.clients.matchAll()
    clientsList.forEach((client) => client.postMessage({ type: 'SET_BADGE', count: 0 }))
  }
})
