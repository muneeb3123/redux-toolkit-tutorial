import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';
import { useSelector } from 'react-redux';

function Navbar() {
    const {amount} = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
      </div>
      <div className="nav-container">
        <div className="cart-icon">
          <ShoppingCartIcon />
          <p className="total-amount">({amount})</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
