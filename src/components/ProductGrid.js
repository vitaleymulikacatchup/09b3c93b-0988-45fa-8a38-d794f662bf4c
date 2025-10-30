import React from 'react';

function ProductGrid() {
  const products = [
    {
      title: 'WATCH SERIES 11',
      subtitle: 'The ultimate way to watch your health.',
      backgroundColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      size: 'large'
    },
    {
      title: 'iPad Pro',
      subtitle: 'Advanced AI performance.',
      description: 'All game-changing capabilities.',
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      size: 'large'
    },
    {
      title: 'AirPods Pro 3',
      subtitle: 'The world\'s best in-ear',
      description: 'Active Noise Cancellation.',
      backgroundColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      size: 'small'
    },
    {
      title: 'MacBook Air',
      subtitle: 'Sky high performance with M4.',
      backgroundColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      size: 'small'
    },
    {
      title: 'Trade In',
      subtitle: 'Get $200-$800',
      description: 'in credit when you trade in iPhone 12 or higher.',
      backgroundColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      size: 'small'
    },
    {
      title: 'Card',
      subtitle: 'Get up to 3% Daily Cash back',
      description: 'with every purchase.',
      backgroundColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      size: 'small'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`${product.backgroundColor} ${product.textColor} p-8 md:p-12 text-center rounded-lg ${
                product.size === 'large' ? 'md:aspect-[16/10]' : 'aspect-square md:aspect-[4/3]'
              } flex flex-col justify-center`}
            >
              <h3 className={`font-semibold mb-2 ${
                product.size === 'large' ? 'text-32 md:text-40' : 'text-24 md:text-28'
              }`}>
                {product.title}
              </h3>
              <p className={`mb-4 ${
                product.size === 'large' ? 'text-19 md:text-21' : 'text-17 md:text-19'
              } text-gray-600`}>
                {product.subtitle}
              </p>
              {product.description && (
                <p className="text-17 text-gray-600 mb-6">
                  {product.description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="apple-button-primary text-sm px-4 py-2">
                  Learn more
                </button>
                <button className="apple-button-secondary text-sm px-4 py-2">
                  {product.title === 'Trade In' ? 'Get your estimate' : 
                   product.title === 'Card' ? 'Learn more' : 'Buy'}
                </button>
              </div>
              
              {/* Product-specific visual elements */}
              {product.title === 'WATCH SERIES 11' && (
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-2xl relative">
                    <div className="absolute inset-2 bg-black rounded-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {product.title === 'iPad Pro' && (
                <div className="mt-8 flex justify-center">
                  <div className="w-32 h-20 bg-gray-800 rounded-lg relative">
                    <div className="absolute inset-1 bg-black rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-1 bg-blue-400 rounded mb-1"></div>
                      <div className="w-12 h-1 bg-green-400 rounded mb-1"></div>
                      <div className="w-20 h-1 bg-purple-400 rounded"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;