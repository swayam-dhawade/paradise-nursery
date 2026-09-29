import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Plant Data organized into 3 categories with 6 unique plants per category (18 total)
  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bac?auto=format&fit=crop&w=500&q=80',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80',
          description: 'Filters formaldehyde and xylene from indoor air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=500&q=80',
          description: 'Removes harmful mold spores and purifies air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80',
          description: 'Adds humidity to dry indoor spaces naturally.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=500&q=80',
          description: 'Easy-to-grow plant with large glossy green leaves.',
          cost: '$22',
        },
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
          description: 'Purifies air while providing soothing gel for skin.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=500&q=80',
          description: 'Soothing aroma that promotes calm and sleep.',
          cost: '$16',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=500&q=80',
          description: 'Sweet floral fragrance that brightens up rooms.',
          cost: '$20',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80',
          description: 'Pine-like herbal fragrance great for culinary use.',
          cost: '$12',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=500&q=80',
          description: 'Refreshing aromatic herb ideal for teas and cooking.',
          cost: '$10',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?auto=format&fit=crop&w=500&q=80',
          description: 'Citrusy scent that uplifts mood and reduces stress.',
          cost: '$14',
        },
        {
          name: 'Sweet Basil',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80',
          description: 'Delightful aroma with spicy and sweet notes.',
          cost: '$11',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Calendula',
          image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=500&q=80',
          description: 'Healing properties used in ointments and remedies.',
          cost: '$15',
        },
        {
          name: 'Chamomile',
          image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=500&q=80',
          description: 'Calming medicinal herb widely used in herbal teas.',
          cost: '$13',
        },
        {
          name: 'Echinacea',
          image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=500&q=80',
          description: 'Known for immune-boosting herbal properties.',
          cost: '$18',
        },
        {
          name: 'Peppermint',
          image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=500&q=80',
          description: 'Relieves digestive discomfort and headaches.',
          cost: '$12',
        },
        {
          name: 'Thyme',
          image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80',
          description: 'Contains thymol, a powerful natural antiseptic.',
          cost: '$11',
        },
        {
          name: 'Sage',
          image: 'https://images.unsplash.com/photo-1603569283847-be29b8b3bf1d?auto=format&fit=crop&w=500&q=80',
          description: 'Rich in antioxidants and anti-inflammatory properties.',
          cost: '$13',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="product-list-wrapper">
      {/* Navbar Header */}
      <nav className="navbar">
        <div className="navbar-left" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
            alt="Paradise Nursery Logo"
            className="navbar-logo"
          />
          <div className="navbar-brand">
            <h3>Paradise Nursery</h3>
            <p>Where Greenery Meets Peace</p>
          </div>
        </div>

        <div className="navbar-links">
          <button className="nav-link-btn" onClick={onHomeClick}>
            Home
          </button>
          <button
            className={`nav-link-btn ${!showCart ? 'active' : ''}`}
            onClick={handlePlantsClick}
          >
            Plants
          </button>
          <div className="cart-icon-container" onClick={handleCartClick}>
            <svg
              className="cart-svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-badge-count">{totalQuantity}</span>
          </div>
        </div>
      </nav>

      {/* Conditional Rendering: Cart Page or Product Listing */}
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <main className="product-grid-container">
          {plantsArray.map((categoryObj, idx) => (
            <section className="category-section" key={idx}>
              <h2 className="category-heading">{categoryObj.category}</h2>
              <div className="plants-grid">
                {categoryObj.plants.map((plant) => {
                  const added = isPlantInCart(plant.name);
                  return (
                    <div className="product-card" key={plant.name}>
                      <div className="product-image-box">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="product-image"
                        />
                      </div>
                      <div className="product-details">
                        <h3 className="product-title">{plant.name}</h3>
                        <p className="product-description">{plant.description}</p>
                        <div className="product-price">{plant.cost}</div>
                        <button
                          className={`add-to-cart-btn ${added ? 'disabled' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
