import React from 'react';

function Hero() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="text-32 md:text-48 font-semibold mb-2">
          iPhone 17 Pro
        </h1>
        <p className="text-19 md:text-21 text-gray-300 mb-8">
          All out Pro.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary">
            Buy
          </button>
        </div>
        
        {/* iPhone image */}
        <div className="relative max-w-2xl mx-auto">
          <div className="aspect-[4/3] bg-gradient-to-b from-orange-400 to-orange-600 rounded-3xl relative overflow-hidden">
            {/* Camera module */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-orange-500 rounded-2xl">
              <div className="flex justify-center items-center h-full space-x-2">
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <div className="w-8 h-8 bg-black rounded-full"></div>
              </div>
              <div className="absolute top-2 right-4 w-3 h-3 bg-gray-200 rounded-full"></div>
              <div className="absolute bottom-2 right-6 w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;