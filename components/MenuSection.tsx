'use client';

import { useState, useMemo } from 'react';
import { menuData, categories, MenuItem } from '@/data/menu';
import { PizzaCard } from './PizzaCard';
import { PizzaModal } from './PizzaModal';

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('traditional');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPizza, setSelectedPizza] = useState<MenuItem | null>(null);

  const filteredMenu = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="menu" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Our Menu</h2>
          <p className="text-lg text-gray-600">
            Choose from our selection of premium pizzas and dishes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setSearchTerm('');
              }}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPizza(item)}
            >
              <PizzaCard item={item} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No items found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <PizzaModal
        pizza={selectedPizza}
        isOpen={selectedPizza !== null}
        onClose={() => setSelectedPizza(null)}
      />
    </section>
  );
}
