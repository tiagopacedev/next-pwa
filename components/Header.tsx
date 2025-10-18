'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Wifi } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { NavigationMenuDemo as NavigationMenu } from './NavigationMenu'
import { navItems } from '@/lib/nav-links'
import InstallAppButton from './InstallAppButton'
import { useOnlineStatus } from '@/hooks/use-online-status'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isOnline = useOnlineStatus()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  function MobileNavigation() {
    return (
      <Popover
        open={isOpen}
        onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu">
            {isOpen ? (
              // Close (X) icon
              <div className="relative size-4">
                <span className="bg-foreground absolute top-[0.4rem] left-0 block h-0.5 w-4 rotate-45 transition-all duration-150" />
                <span className="bg-foreground absolute top-[0.4rem] left-0 block h-0.5 w-4 -rotate-45 transition-all duration-150" />
              </div>
            ) : (
              // Hamburger icon
              <div className="relative flex h-8 w-4 items-center justify-center">
                <div className="relative size-4">
                  <span className="bg-foreground absolute top-1 left-0 block h-0.5 w-4 transition-all duration-150" />
                  <span className="bg-foreground absolute top-2.5 left-0 block h-0.5 w-4 transition-all duration-150" />
                </div>
              </div>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          side="bottom"
          className="bg-background top-full left-0 mt-0 max-h-[calc(100vh-3rem)] w-screen overflow-auto rounded-none border-0 p-2 shadow-lg">
          {!isOnline && (
            <div className="mb-4 flex items-center gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              <Wifi className="h-5 w-5 text-amber-500" />
              <span>You're currently offline</span>
            </div>
          )}

          <nav className="flex flex-col gap-2 space-y-4">
            {Array.from(new Set(navItems.map((item) => item.category || ''))).map((category) => (
              <div
                key={category}
                className="flex flex-col gap-1">
                {category && (
                  <span className="text-muted-foreground px-2 py-1 text-xs">{category}</span>
                )}
                {navItems
                  .filter((item) => (category ? item.category === category : !item.category))
                  .map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={cn(
                        'flex items-center rounded-lg px-2 py-2 text-sm font-medium transition-colors',
                        pathname === item.href
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      )}>
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant="outline"
                          className="bg-primary/20 text-primary border-primary/30 ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <div className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-bold">
          Next PWA
        </Link>

        <NavigationMenu />

        <div className="flex items-center gap-2">
          <InstallAppButton />
          <MobileNavigation />
        </div>
      </div>
    </div>
  )
}
