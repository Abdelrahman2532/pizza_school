'use client';

import { MenuItem } from '@/data/menu';

interface PizzaCardProps {
  item: MenuItem;
}

export function PizzaCard({ item }: PizzaCardProps) {
  const displayPrice = item.sizes?.[0]?.price ?? item.price ?? 0;

  return (
    <div className="product-card cursor-pointer h-full flex flex-col">
      {/* Image */}
      <div className="product-image relative">
        <div className="absolute top-2 left-2 flex gap-2">
          {item.isBestSeller && (
            <span className="badge-bestseller">Best Seller</span>
          )}
          {item.isNew && (
            <span className="badge-new">New</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-3 flex-1">{item.description}</p>

        {/* Spicy indicator */}
        {item.spicy > 0 && (
          <div className="mb-3 flex gap-1">
            {Array(item.spicy).fill(0).map((_, i) => (
              <span key={i} className="text-orange-600">🌶️</span>
            ))}
          </div>
        )}

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            From {displayPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
