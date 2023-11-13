import React from 'react';
import './App.css';
import Header from './header';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Product from './product';
import { useState } from 'react';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };
  return (
    <Router>
      <div>
        <Header cartItemCount={cartItemCount}/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product cartItemCount={cartItemCount} onAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
