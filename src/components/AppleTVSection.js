import React from 'react';

function AppleTVSection() {
  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Main Apple TV+ show */}
        <div className="relative mb-4 rounded-lg overflow-hidden">
          <div className="aspect-[21/9] bg-gradient-to-r from-blue-900 via-teal-800 to-green-700 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 text-center text-white">
              <div className="mb-4">
                <svg className="w-12 h-8 mx-auto mb-4" viewBox="0 0 60 25" fill="white">
                  <path d="M7.7 4.4c-.5 0-.9.4-.9.9v14.4c0 .5.4.9.9.9h44.6c.5 0 .9-.4.9-.9V5.3c0-.5-.4-.9-.9-.9H7.7zm0-1.8h44.6c1.5 0 2.7 1.2 2.7 2.7v14.4c0 1.5-1.2 2.7-2.7 2.7H7.7c-1.5 0-2.7-1.2-2.7-2.7V5.3c0-1.5 1.2-2.7 2.7-2.7z"/>
                  <path d="M15.1 8.8l8.2 4.7c.3.2.3.6 0 .8l-8.2 4.7c-.4.2-.9-.1-.9-.5V9.3c0-.4.5-.7.9-.5z"/>
                </svg>
              </div>
              <h2 className="text-48 md:text-56 font-bold mb-4">DOWN CEMETERY ROAD</h2>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <button className="bg-white text-black px-6 py-2 rounded-md font-medium">
                  Watch now
                </button>
                <span className="text-sm">Drama • Comedy-drama</span>
              </div>
            </div>
            
            {/* Character images placeholder */}
            <div className="absolute left-8 bottom-8 w-32 h-40 bg-gray-800 rounded-lg opacity-80"></div>
            <div className="absolute right-8 bottom-8 w-32 h-40 bg-gray-700 rounded-lg opacity-80"></div>
          </div>
        </div>
        
        {/* Show thumbnails row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { title: 'Slow Horses', color: 'bg-green-600' },
            { title: 'Bad Monkey', color: 'bg-gray-800' },
            { title: 'The Buccaneers', color: 'bg-blue-800' },
            { title: 'Shrinking', color: 'bg-purple-600' },
            { title: 'Disclaimer', color: 'bg-pink-600' }
          ].map((show, index) => (
            <div key={index} className={`aspect-[16/9] ${show.color} rounded-lg flex items-end p-4 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="relative z-10">
                <h3 className="text-white font-semibold text-sm">{show.title}</h3>
                <div className="flex items-center mt-1">
                  <svg className="w-4 h-3 mr-2" viewBox="0 0 60 25" fill="white">
                    <path d="M7.7 4.4c-.5 0-.9.4-.9.9v14.4c0 .5.4.9.9.9h44.6c.5 0 .9-.4.9-.9V5.3c0-.5-.4-.9-.9-.9H7.7zm0-1.8h44.6c1.5 0 2.7 1.2 2.7 2.7v14.4c0 1.5-1.2 2.7-2.7 2.7H7.7c-1.5 0-2.7-1.2-2.7-2.7V5.3c0-1.5 1.2-2.7 2.7-2.7z"/>
                    <path d="M15.1 8.8l8.2 4.7c.3.2.3.6 0 .8l-8.2 4.7c-.4.2-.9-.1-.9-.5V9.3c0-.4.5-.7.9-.5z"/>
                  </svg>
                  <span className="text-xs text-gray-300">TV+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppleTVSection;