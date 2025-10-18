'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // <-- UNCOMMENTED THIS
import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import { navItems } from '@/lib/nav-links'

// --- Helper Component ---

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string; icon?: React.ReactNode }) {
  // 1. Get the current pathname inside ListItem
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          // 2. Apply active state styling for dropdown items
          className={cn(
            'block space-y-1 rounded-md p-2 leading-none no-underline transition-colors outline-none select-none',
            isActive
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
          )}>
          <div className="flex items-center space-x-2">
            {icon && (
              <span className={isActive ? 'text-primary' : 'text-muted-foreground'}>{icon}</span>
            )}
            <div className="text-sm leading-none font-medium">{title}</div>
          </div>
          <p className="text-muted-foreground ml-7 line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// --- Main Navigation Component ---

export function NavigationMenuDemo() {
  // 1. Get the current pathname inside NavigationMenuDemo
  const pathname = usePathname()

  const uncategorizedItems = navItems.filter((item) => !item.category)
  const categories = Array.from(
    new Set(navItems.map((item) => item.category).filter(Boolean))
  ) as string[]

  return (
    <NavigationMenu
      viewport={false}
      className="hidden items-center gap-1 md:flex">
      <NavigationMenuList>
        {/* 1. Uncategorized (Direct Links) */}
        {uncategorizedItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}>
                <Link
                  href={item.href}
                  // 2. Apply active state styling for direct links
                  className={cn(
                    'flex items-center gap-1',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  )}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}

        {/* 2. Categorized (Dropdowns) */}
        {categories.map((category) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-2">
                {navItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}>
                      {item.badge}
                    </ListItem>
                  ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
