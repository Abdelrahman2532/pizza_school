'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    image: 'https://images.pexels.com/photos/320456/pexels-photo-320456.jpeg',
    title: 'Classic Margherita',
  },
  {
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg',
    title: 'Pepperoni Perfection',
  },
  {
    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    title: 'Meat Lovers',
  },
  {
    image: 'https://images.pexels.com/photos/3556518/pexels-photo-3556518.jpeg',
    title: 'Double Cheese',
  },
  {
    image: 'https://images.pexels.com/photos/5632628/pexels-photo-5632628.jpeg',
    title: 'Fresh Veggies',
  },
  {
    image: 'https://images.pexels.com/photos/3628356/pexels-photo-3628356.jpeg',
    title: 'Chicken BBQ',
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="block text-white mb-2">Instagram</span>
            <span className="gradient-text">Food Gallery</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-lg">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
