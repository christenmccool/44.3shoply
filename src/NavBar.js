import React from 'react';
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = () => {
  const cartTotal = useSelector(store => store.cart.total);
  return (
    <div className="NavBar">
      <div className="NavBar-left">
        Shoply
      </div>
      <div className="NavBar-right">
        <FontAwesomeIcon icon={faShoppingCart} className="NavBar-icon" />
        <div className="NavBar-total">
          {`$${Math.round(cartTotal*100)/100}`}
        </div>
      </div>
    </div>
  )
}

export default NavBar;