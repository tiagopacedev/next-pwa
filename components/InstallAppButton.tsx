'use client'

import { Button } from '@/components/ui/button'
import { Check, Download, Share } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useDevice } from '@/hooks/use-device'
import { usePwaInstall } from '@/hooks/use-pwa-install'

export default function InstallAppButton() {
  const device = useDevice()
  const { isInstalled, deferredPrompt, handleInstallClick } = usePwaInstall()

  const isSafari = (device.os === 'iOS' || device.os === 'macOS') && device.browser === 'Safari'
  const canInstall = !!deferredPrompt

  if (isInstalled) {
    return (
      <Button
        size="sm"
        className="max-w-xs"
        disabled>
        <Check className="mr-2 h-4 w-4" />
        Installed
      </Button>
    )
  }

  // if (!canInstall && !isSafari) return null

  if (isSafari) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="max-w-xs"
            aria-label="Install application">
            <Download className="mr-2 h-4 w-4" />
            Install App
          </Button>
        </DialogTrigger>

        <DialogContent className="border-border/50 rounded-2xl border p-4 shadow-lg backdrop-blur-md sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Install the app</DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 space-y-2">
              <p>
                <p>
                  1. Press{' '}
                  <kbd className="inline-flex items-center rounded border bg-gray-100 px-1 py-0.5">
                    <Share className="h-4 w-4" />
                  </kbd>{' '}
                  in the browser toolbar
                </p>
              </p>
              <p>
                2. Scroll down and pick{' '}
                <kbd className="rounded border bg-gray-100 px-1 py-0.5 text-xs">
                  {device.os === 'macOS' ? 'Add to Dock' : 'Add to Home Screen'}
                </kbd>
              </p>
              <p>
                3. Look for the app icon on your {device.os === 'macOS' ? 'Dock' : 'Home Screen'}
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Button
      size="sm"
      onClick={handleInstallClick}
      disabled={!canInstall}
      className="max-w-xs animate-pulse"
      aria-label="Install application">
      <Download className="mr-2 h-4 w-4" />
      Install App
    </Button>
  )
}
