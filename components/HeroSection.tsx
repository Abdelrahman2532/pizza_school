'use client';

export function HeroSection() {
  return (
    <section id="home" className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-gray-900 mb-3">
                Premium Pizza
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fresh, handcrafted pizzas made with authentic Italian techniques and the finest ingredients. Experience the perfect blend of tradition and quality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="btn-primary text-center">
                Order Now
              </a>
              <a href="#menu" className="btn-secondary text-center">
                View Menu
              </a>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">30m</p>
                <p className="text-sm text-gray-600">Fast Delivery</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Fresh Ingredients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-6xl mb-2">🍕</div>
              <p>Premium Pizza Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
