import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { cn } from './utils';

type IconType = React.ElementType;

export interface FeatureItem {
  /** A unique identifier for the feature. */
  id: string;
  /** The icon associated with the feature. */
  icon: IconType;
  /** The concise title of the feature. */
  title: string;
  /** The detailed description of the feature's benefit. */
  description: React.ReactNode;
  /** If provided, the card becomes clickable and shows a "View details" hint. */
  onClick?: () => void;
}

export interface FeatureGridProps {
  /** Array of feature items to display. */
  features: FeatureItem[];
  /** Optional title for the entire grid section. */
  sectionTitle?: React.ReactNode;
  /** Optional subtitle for the entire grid section. */
  sectionSubtitle?: React.ReactNode;
  /** Optional id for the section (e.g. for nav-bar anchor links). */
  id?: string;
  /** Optional class name to apply to the main container. */
  className?: string;
}

/**
 * A responsive grid of cards for showcasing a list of items (features,
 * experiences, roles, etc.) — icon, title, and a short description each.
 */
export function FeatureGrid({
  features,
  sectionTitle,
  sectionSubtitle,
  id,
  className,
}: FeatureGridProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section
      id={id}
      className={cn('py-20', className)}
      role="region"
      aria-label={typeof sectionTitle === 'string' ? sectionTitle : 'Features'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            {sectionTitle && (
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#253D2C] via-[#2E6F40] to-[#68BA7F] bg-clip-text text-transparent">
                {sectionTitle}
              </h2>
            )}
            {sectionSubtitle && (
              <p className="mt-4 text-lg text-gray-600">{sectionSubtitle}</p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
          {features.map((feature) => (
            <Card
              key={feature.id}
              onClick={feature.onClick}
              role={feature.onClick ? 'button' : 'listitem'}
              tabIndex={feature.onClick ? 0 : undefined}
              onKeyDown={
                feature.onClick
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        feature.onClick?.();
                      }
                    }
                  : undefined
              }
              className={cn(
                'flex flex-col h-full p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-[#2E6F40]/50 focus-within:ring-2 focus-within:ring-[#2E6F40] focus-within:ring-offset-2',
                feature.onClick && 'cursor-pointer'
              )}
            >
              <CardHeader className="p-0 pb-3">
                <div className="mb-3 p-2 w-fit rounded-lg bg-[#2E6F40]/10 text-[#2E6F40] border border-[#2E6F40]/20 transition-colors duration-200">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow flex flex-col">
                <CardDescription className="text-sm text-gray-600 flex-grow">
                  {feature.description}
                </CardDescription>
                {feature.onClick && (
                  <span className="mt-3 text-sm font-medium text-[#2E6F40]">
                    View details →
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
