'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-2">PIZZA SCHOOL</h3>
            <p className="text-gray-400 text-sm">
              Premium pizza delivery. Fresh ingredients. Handcrafted recipes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-3">Hours</h4>
            <p className="text-sm text-gray-400">
              Mon - Thu: 11:00 - 23:00<br />
              Fri - Sat: 11:00 - 00:00<br />
              Sunday: 12:00 - 23:00
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Pizza School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
