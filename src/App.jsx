import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="company-title">Paradise Nursery</h1>
            <p className="company-tagline">Where Greenery Meets Peace</p>
            <div className="divider"></div>
            
            {/* About Us section detailing company information */}
            <AboutUs />

            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;
