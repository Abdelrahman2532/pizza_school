'use client';

import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle } from 'lucide-react';

export function AboutSection() {
  const features = [
    { title: 'Handmade Pizza', desc: 'Every pizza is crafted with love and passion' },
    { title: 'Fresh Ingredients', desc: '100% premium quality ingredients daily' },
    { title: 'Student Spirit', desc: 'Founded by pizza enthusiasts for pizza lovers' },
    { title: 'Fast Delivery', desc: '30-minute guaranteed delivery' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="block text-white mb-2">About</span>
                <span className="gradient-text">Pizza School</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded by passionate pizza enthusiasts, Pizza School is more than just a pizza place. It's a movement. Every slice represents our commitment to excellence, quality, and the art of perfect pizza making.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">{feature.title}</p>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <div className="glass-dark rounded-3xl p-8 h-full flex items-center justify-center overflow-hidden">
              <div className="space-y-4 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-9xl"
                >
                  🎓
                </motion.div>
                <h3 className="text-2xl font-bold">Pizza University</h3>
                <p className="text-gray-400">Where passion meets perfection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
