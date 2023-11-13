import Logo from './images/a1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css'


const Header=({ cartItemCount })=>{
    return(
        <header>
          <nav>
            <div>
            <ul>
            <li><img src={Logo} id="logo"alt="logo"/></li>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
            <div>
            <div className="right-links">
              <span className="cart-item-count">{cartItemCount}</span>
              <FontAwesomeIcon icon={faShoppingCart} className="scart" />
            </div>
            </div>
            
          </nav>
      </header>
    )
   
}
export default Header;