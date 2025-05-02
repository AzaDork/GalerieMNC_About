import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Mosaic from './components/Mosaic';
import StoreInfo from './components/StoreInfo';
import LocationSection from './components/LocationSection';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main className="pt-40">
        <Mosaic />
        <StoreInfo />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;