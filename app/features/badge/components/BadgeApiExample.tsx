'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const BadgeApiExample = () => {
  const [badgeCount, setBadgeCount] = useState(0)

  // const handleSetAppBadge = () => {
  //   if ("setAppBadge" in navigator) {
  //     try {
  //       navigator.setAppBadge(badgeCount);
  //     } catch (error) {
  //       console.error("Failed to set app badge:", error);
  //     }
  //   } else {
  //     console.warn("App Badge API is not supported in this browser");
  //   }
  // };

  // const handleClearAppBadge = () => {
  //   if ("clearAppBadge" in navigator) {
  //     try {
  //       navigator.clearAppBadge();
  //       setBadgeCount(0);
  //     } catch (error) {
  //       console.error("Failed to clear app badge:", error);
  //     }
  //   } else {
  //     console.warn("App Badge API is not supported in this browser");
  //   }
  // };

  const handleSetAppBadge = async () => {
    if ('setAppBadge' in navigator) {
      try {
        await navigator.setAppBadge(badgeCount)

        // Send message to service worker to sync badge state
        if (navigator.serviceWorker?.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'SET_BADGE',
            count: badgeCount
          })
        }
      } catch (error) {
        console.error('Failed to set app badge:', error)
      }
    } else {
      console.warn('App Badge API is not supported in this browser')
    }
  }

  const handleClearAppBadge = async () => {
    if ('clearAppBadge' in navigator) {
      try {
        await navigator.clearAppBadge()
        setBadgeCount(0)

        // Send message to service worker to clear badge
        if (navigator.serviceWorker?.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'SET_BADGE',
            count: 0
          })
        }
      } catch (error) {
        console.error('Failed to clear app badge:', error)
      }
    } else {
      console.warn('App Badge API is not supported in this browser')
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span>Badge Count:</span>
          <input
            type="number"
            value={badgeCount}
            onChange={(e) => setBadgeCount(Number(e.target.value))}
            className="w-24 rounded border px-2 py-1"
            min="0"
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSetAppBadge}>Set App Badge</Button>
          <Button
            variant="destructive"
            onClick={handleClearAppBadge}
          >
            Clear App Badge
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BadgeApiExample
