import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse price string like "$15" or number 15 into a numeric value
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    if (typeof cost === 'string') {
      return parseFloat(cost.replace('$', '')) || 0;
    }
    return 0;
  };

  // Calculate total amount for all products in cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate total quantity of items in cart
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total cost for a specific item based on quantity
  const calculateSubtotal = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Coming Soon! Thank you for trying Paradise Nursery.');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header-title">Shopping Cart</h2>
      <div className="cart-summary">
        <h3 className="total-cart-amount">
          Total Cart Amount: <span className="highlight-amount">${calculateTotalAmount()}</span>
        </h3>
        <p className="total-items-count">
          Total Items in Cart: <strong>{calculateTotalQuantity()}</strong>
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is currently empty.</p>
          <button className="get-started-button1" onClick={onContinueShopping}>
            Explore Houseplants
          </button>
        </div>
      ) : (
        <div className="cart-items-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Unit Price: {typeof item.cost === 'number' ? `$${item.cost}` : item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Subtotal: <strong>${calculateSubtotal(item)}</strong>
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="continue_shopping_btn">
        <button
          className="get-started-button1"
          onClick={(e) => onContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <button
          className="get-started-button1 checkout-btn"
          onClick={handleCheckoutShopping}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
