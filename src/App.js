import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ProductGrid from './components/ProductGrid';
import TradeInSection from './components/TradeInSection';
import AppleTVSection from './components/AppleTVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProductSection 
          title="iPhone Air"
          subtitle="The thinnest iPhone ever."
          description="With the power of pro inside."
          backgroundColor="bg-apple-light-gray"
          textColor="text-black"
          image="/images/iphone-air.jpg"
        />
        <ProductSection 
          title="MacBook Pro 14\""
          subtitle="Supercharged by M5."
          backgroundColor="bg-black"
          textColor="text-white"
          image="/images/macbook-pro.jpg"
        />
        <ProductGrid />
        <TradeInSection />
        <AppleTVSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;