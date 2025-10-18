'use client'

import { registerSW } from '@/lib/register-service-worker'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface PWAProviderProps {
  children: ReactNode
}

interface PWAContextType {
  badgeCount: number
}

export const PWAContext = createContext<PWAContextType>({
  badgeCount: 0
})

export function PWAProvider({ children }: PWAProviderProps) {
  const [badgeCount, setBadgeCount] = useState(0)

  // Badge count
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const handler = (event: MessageEvent) => {
        if (event.data?.type === 'SET_BADGE') {
          setBadgeCount(event.data.count)
        }
      }
      navigator.serviceWorker.addEventListener('message', handler)
      return () => navigator.serviceWorker.removeEventListener('message', handler)
    }
  }, [])

  // Service worker
  useEffect(() => {
    registerSW()
  }, [])

  // Protocol handler
  useEffect(() => {
    // Register protocol handler
    if ('navigator' in window && 'registerProtocolHandler' in navigator) {
      try {
        navigator.registerProtocolHandler(
          'web+pwa',
          `${window.location.origin}/features/protocol-handler?url=%s`
        )
      } catch (error) {
        console.error('Failed to register protocol handler:', error)
      }
    }
  }, [])

  // Background sync
  useEffect(() => {
    const registerBackgroundSync = async () => {
      try {
        if ('serviceWorker' in navigator && 'SyncManager' in window) {
          const registration = await navigator.serviceWorker.ready
          await registration.sync.register('periodic-sync')
          console.log('Background sync registered successfully')
        }
      } catch (error) {
        console.error('Error registering background sync:', error)
      }
    }

    void registerBackgroundSync()
  }, [])

  return <PWAContext.Provider value={{ badgeCount }}>{children}</PWAContext.Provider>
}
