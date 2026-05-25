'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Ahmed Hassan',
    role: 'Food Critic',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'The best pizza experience in town! Every slice is perfectly crafted with premium ingredients.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Pizza Enthusiast',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Pizza School has revolutionized how I enjoy pizza. Fast delivery, hot pizza, perfect taste!',
    rating: 5,
  },
  {
    name: 'Mohammed Khan',
    role: 'Restaurant Owner',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Outstanding quality and service. They really understand what premium pizza means.',
    rating: 5,
  },
  {
    name: 'Layla Mansour',
    role: 'Happy Customer',
    avatar: 'https://i.pravatar.cc/150?img=4',
    content: 'The Chicken BBQ pizza is absolutely divine! Became our family favorite instantly.',
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="block text-white mb-2">What Our</span>
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-gray-300">Join thousands of satisfied pizza lovers</p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-dark p-6 rounded-2xl hover:bg-white/20 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(review.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-200 mb-6 leading-relaxed">{review.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
