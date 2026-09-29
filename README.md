# Paradise Nursery Shopping Application

Paradise Nursery is an intuitive and beautifully designed e-commerce React web application for browsing and purchasing houseplants. The application is built using React, Redux Toolkit, and Vite.

## Features

- **Landing Page**: Features a lush background image, company title, detailed About Us section, and a "Get Started" button linking to the product catalog.
- **Product Listing Page**:
  - Displays 18 unique houseplants categorized into 3 distinct sections: Air Purifying Plants, Aromatic Fragrant Plants, and Medicinal Plants (6 plants per category).
  - Each plant item includes a thumbnail image, plant name, description, unit price, and an "Add to Cart" button.
  - Clicking "Add to Cart" dynamically updates the cart count and disables the button.
- **Header & Navigation Bar**:
  - Sticky navbar present across pages with navigation links for Home, Plants, and Cart.
  - Includes a dynamic shopping cart icon displaying the total count of items in real time.
- **Shopping Cart Page**:
  - Displays total cart amount and total number of items.
  - Lists each plant with thumbnail, name, unit price, total item cost, and quantity adjustment (+ / -) buttons.
  - Option to delete individual items from the cart.
  - "Continue Shopping" button to return to the product listing.
  - "Checkout" button with a "Coming Soon" notification.

## Tech Stack

- **Frontend**: React 18, HTML5, CSS3
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Build Tool**: Vite
- **Icons**: SVG / Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/paradise-nursery.git
   cd paradise-nursery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## License

This project is licensed under the MIT License.
