'use client';

import { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';

interface PizzaModalProps {
  pizza: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PizzaModal({ pizza, isOpen, onClose }: PizzaModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>(pizza?.sizes?.[0]?.name ?? '');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!pizza) return null;

  const currentSize = pizza.sizes?.find((s) => s.name === selectedSize);
  const price = currentSize?.price ?? pizza.price ?? 0;

  const handleAddToCart = () => {
    const item = {
      id: `${pizza.id}-${selectedSize}`,
      name: pizza.name,
      size: selectedSize,
      price,
      quantity,
      image: pizza.image,
      addons: [],
    };
    addToCart(item);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{pizza.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image Placeholder */}
          <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-6xl mb-2">🍕</div>
              <p>{pizza.name}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600">{pizza.description}</p>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {pizza.ingredients.map((ingredient, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          {pizza.sizes && (
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {pizza.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`py-2 rounded-lg font-semibold transition-colors ${
                      selectedSize === size.name
                        ? 'bg-red-600 text-white'
                        : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center gap-4 w-fit border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold min-w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Spicy Level */}
          {pizza.spicy > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-900">
                Heat Level: {Array(pizza.spicy).fill('🌶️').join('')}
              </p>
            </div>
          )}

          {/* Calories */}
          {pizza.calories && (
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{pizza.calories} cal</span> per serving
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="flex gap-4 items-center justify-between pt-6 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600">Total Price</p>
              <p className="text-3xl font-bold text-gray-900">
                {(price * quantity).toFixed(0)}
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className="btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
