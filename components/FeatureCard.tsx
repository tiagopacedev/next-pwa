import type React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group bg-card hover:border-primary/50 rounded-md border p-6 transition-all hover:shadow-md"
    >
      <div className="flex h-full flex-col">
        <div className="mb-4">{icon}</div>

        <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

        <div className="text-primary flex items-center font-medium">
          Explore{' '}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
