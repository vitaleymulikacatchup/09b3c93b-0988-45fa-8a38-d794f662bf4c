import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-gray-800 text-center py-2 px-4 text-sm">
        <span>Vill att annat land eller annan för att se det innehåll som finns där du är och handla online.</span>
        <select className="ml-2 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm">
          <option>Sverige</option>
        </select>
        <button className="ml-2 text-blue-400 hover:text-blue-300">Fortsätt</button>
        <button className="ml-4 text-gray-400 hover:text-gray-300">×</button>
      </div>
      
      {/* Main navigation */}
      <nav className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Apple logo */}
          <div className="flex items-center">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item} href="#" className="apple-nav-link">
                {item}
              </a>
            ))}
          </div>
          
          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            <ShoppingCart className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            {navItems.map((item) => (
              <a key={item} href="#" className="block py-2 apple-nav-link">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;