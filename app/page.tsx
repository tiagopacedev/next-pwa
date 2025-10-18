import FeatureCard from '@/components/FeatureCard'
import { featureCategories } from '../lib/features'

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="mt-6 mb-10 space-y-2">
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">Next.js PWA</h1>
        <p className="text-muted-foreground mb-4 text-sm md:text-base">
          A comprehensive Progressive Web App with advanced features
        </p>
      </div>

      {/* <NetworkStatus className="mb-8" /> */}

      <div className="mb-8 space-y-8">
        {featureCategories.map((category) => (
          <div key={category.title}>
            <h2 className="mb-4 text-lg font-semibold">{category.title}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={<feature.icon className="h-5 w-5" />}
                  href={feature.href}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
