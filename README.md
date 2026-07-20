# 👟 SHOOZ - Modern Shoe E-Commerce Store

<div align="center"> 
  <h3> 🚀 Live Demo: <a href="https://shooz-kishan001.netlify.app/" target="_blank">
    View Website </a> 
  </h3> 
</div>

<div align="center">

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react\&logoColor=black)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite\&logoColor=white)
![React Router](https://img.shields.io/badge/Routing-React%20Router-red)
![Responsive](https://img.shields.io/badge/Design-Responsive-success)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

</div>



# 📋 Table of Contents

* 🌟 Overview
* ✨ Key Features
* 🛠️ Tech Stack
* 📁 Project Structure
* 🛒 Features Breakdown
* 🚀 Installation & Setup
* 🎨 Future Improvements
* 📞 Contact



# 🌟 Overview

**SHOOZ** is a modern React-based e-commerce application designed for showcasing and selling footwear products.

The application provides a smooth shopping experience with features such as:

* Product browsing
* Cart management
* Wishlist functionality
* Category filtering
* LocalStorage persistence
* Responsive user interface

Built using **React 19**, **React Router**, and **Vite**, the project demonstrates modern frontend development practices including reusable components, state management with hooks, and dynamic UI rendering.


# ✨ Key Features

## 🛍️ Shopping Experience

* Browse multiple shoe collections
* Featured Products section
* New Arrivals section
* Best Seller section
* Dynamic product rendering

## 🛒 Cart Functionality

* Add products to cart
* Increase quantity
* Decrease quantity
* Remove items
* Cart count indicator
* Automatic cart persistence using LocalStorage

## ❤️ Wishlist Functionality

* Add products to wishlist
* Prevent duplicate wishlist items
* Dedicated wishlist page
* Wishlist counter in navbar

## ⚡ User Experience

* Responsive layout
* Modern product cards
* Dynamic product filtering
* Sticky navigation bar
* Smooth page navigation
* Persistent shopping data



# 🛠️ Tech Stack

## 🧱 Core Technologies

| Technology       | Purpose              |
| ---------------- | -------------------- |
| React 19         | Frontend Development |
| Vite             | Build Tool           |
| React Router DOM | Routing & Navigation |
| JavaScript ES6+  | Application Logic    |
| CSS3             | Styling              |
| LocalStorage API | Data Persistence     |
| Remix Icons      | UI Icons             |



# 📁 Project Structure

```bash
src/
│
├── Components/
│   ├── Navbar.jsx
│   ├── Products.jsx
│   ├── Boots&Booties.jsx
│   ├── Sale_Section.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   └── Footer.jsx
│
├── data/
│   ├── productsData.js
│   ├── featuredProducts.js
│   ├── bestSellerProducts.js
│   └── newArrivalProducts.js
│
├── Styles/
│   ├── Navbar.css
│   ├── Products.css
│   ├── Boots&Booties.css
│   ├── Sale_Section.css
│   ├── Cart.css
│   ├── Wishlist.css
│   └── Footer.css
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```



# 🛒 Features Breakdown

## Product Management

Products are stored inside reusable data files:

```javascript
productsData.js
featuredProducts.js
newArrivalProducts.js
bestSellerProducts.js
```

This makes the application scalable and easy to maintain.



## Cart System

The cart system supports:

* Add To Cart
* Quantity Increment
* Quantity Decrement
* Remove Product
* Cart Count Badge

Cart data is automatically saved in LocalStorage:

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

Users retain their cart items even after refreshing the browser.



## Wishlist System

Wishlist functionality includes:

* Add To Wishlist
* Duplicate Protection
* Wishlist Counter
* Dedicated Wishlist Page

Wishlist items are also stored in LocalStorage.



## Product Filtering

Users can switch between:

* Featured Products
* New Arrivals
* Best Sellers

without page reloads.

React State Management dynamically updates displayed products.


## Navigation

Implemented using:

```javascript
react-router-dom
```

Routes include:

* Home Page
* Wishlist Page

and cart drawer functionality.



# 🚀 Installation & Setup

## 📋 Prerequisites

* Node.js (v18+ recommended)
* npm



## Clone Repository

```bash
git clone https://github.com/your-username/shooz.git
```


## Navigate to Project

```bash
cd shooz
```



## Install Dependencies

```bash
npm install
```


## Start Development Server

```bash
npm start
```

or

```bash
npm run dev
```


## Build for Production

```bash
npm run build
```


## Preview Production Build

```bash
npm run preview
```



# 🎨 Future Improvements

Potential enhancements for future versions:

* Product Details Page
* Search Functionality
* Product Categories
* User Authentication
* Payment Gateway Integration
* Order Management System
* Backend API Integration
* Admin Dashboard
* Product Reviews & Ratings
* Dark Mode



# 📞 Contact

### Kishan Patel

📧 Email: [kpatel.tech.mca@gmail.com](mailto:kpatel.tech.mca@gmail.com)

🐱 GitHub: https://github.com/kishan90909

💼 Portfolio: https://portfolio-kishan001.netlify.app/

I'm open to Frontend Developer, React Developer, MERN Stack Developer, and Full-Stack Developer opportunities.


© 2026 Kishan Patel

All Rights Reserved.
