'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const deals = [
  {
    title: 'Classic Combo',
    desc: 'Get 2 pizzas + 1 drink',
    price: '199',
    original: '250',
    badge: 'Save 20%',
  },
  {
    title: 'Party Pack',
    desc: '3 Large pizzas + sides',
    price: '349',
    original: '450',
    badge: 'Save 22%',
    popular: true,
  },
  {
    title: 'Student Special',
    desc: '1 Pizza + Fries + Drink',
    price: '99',
    original: '140',
    badge: 'Save 29%',
  },
];

export function DealsSection() {
  return (
    <section id="deals" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="block text-white mb-2">Limited Time</span>
            <span className="gradient-text">Deals</span>
          </h2>
          <p className="text-gray-300">Save big on our special combo packages</p>
        </motion.div>

        {/* Deals Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {deals.map((deal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 overflow-hidden group ${
                deal.popular
                  ? 'glass-dark border-2 border-red-500/50 shadow-xl shadow-red-500/20'
                  : 'glass-dark'
              }`}
            >
              {deal.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Badge */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4 px-3 py-1 bg-red-500/20 rounded-full text-xs font-bold text-red-400"
              >
                {deal.badge}
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
              <p className="text-gray-400 mb-6">{deal.desc}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-black gradient-text">{deal.price}</span>
                <span className="text-lg text-gray-500 line-through">{deal.original}</span>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 font-bold rounded-xl transition-all transform hover:scale-105 ${
                  deal.popular
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-xl hover:shadow-red-500/50'
                    : 'border-2 border-red-500/50 text-red-400 hover:bg-red-500/10'
                }`}
              >
                Order Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
