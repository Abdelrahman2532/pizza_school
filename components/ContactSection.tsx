'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Get in touch with Pizza School
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex gap-4">
            <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
              <a href="tel:01111666079" className="text-gray-600 hover:text-red-600 transition-colors">
                01111666079
              </a>
              <br />
              <a href="tel:01021977425" className="text-gray-600 hover:text-red-600 transition-colors">
                01021977425
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <a href="mailto:hello@pizzaschool.com" className="text-gray-600 hover:text-red-600 transition-colors">
                hello@pizzaschool.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-600">Cairo, Egypt</p>
              <p className="text-gray-600">Available for Delivery</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/201111666079"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
