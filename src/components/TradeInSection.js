import React from 'react';

function TradeInSection() {
  return (
    <section className="bg-apple-light-gray py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-8">
            <div className="mb-6">
              <svg className="w-8 h-8 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <h3 className="text-24 font-semibold mb-2">Trade In</h3>
            </div>
            <p className="text-17 text-gray-600 mb-2">Get up to $200-$800</p>
            <p className="text-17 text-gray-600 mb-6">in credit when you trade in iPhone 12 or higher.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="apple-button-primary">
                Get your estimate
              </button>
            </div>
          </div>
          
          <div className="text-center p-8">
            <div className="mb-6">
              <svg className="w-8 h-8 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <h3 className="text-24 font-semibold mb-2">Card</h3>
            </div>
            <p className="text-17 text-gray-600 mb-2">Get up to 3% Daily Cash back</p>
            <p className="text-17 text-gray-600 mb-6">with every purchase.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TradeInSection;