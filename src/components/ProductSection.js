import React from 'react';

function ProductSection({ title, subtitle, description, backgroundColor, textColor, image, isFullHeight = true }) {
  return (
    <section className={`${backgroundColor} ${textColor} ${isFullHeight ? 'min-h-screen' : 'py-16 md:py-24'} flex items-center`}>
      <div className="max-w-screen-xl mx-auto px-4 text-center w-full">
        <h2 className="apple-section-title">
          {title}
        </h2>
        <p className="apple-section-subtitle text-gray-600">
          {subtitle}
        </p>
        {description && (
          <p className="text-19 md:text-21 text-gray-600 mb-8">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary">
            Buy
          </button>
        </div>
        
        {/* Product image placeholder */}
        <div className="relative max-w-4xl mx-auto">
          {title === 'iPhone Air' && (
            <div className="relative">
              <div className="aspect-[16/9] bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-96 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-orange-200 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          )}
          
          {title === 'MacBook Pro 14"' && (
            <div className="aspect-[16/9] bg-gradient-to-b from-gray-800 to-black rounded-lg flex items-center justify-center">
              <div className="w-64 h-48 bg-gradient-to-b from-gray-600 to-gray-800 transform rotate-12 rounded-lg relative">
                <div className="absolute inset-4 bg-black rounded"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;