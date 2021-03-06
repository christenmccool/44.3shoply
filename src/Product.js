import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

import {useSelector, useDispatch} from 'react-redux';
import {add, remove} from './actions.js';

const Product = ({id, name, price, description, image_url}) => {
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(add(id, {name, price, description, image_url}));
  }

  const handleTrashClick = () => {
    dispatch(remove(id));
  }

  const capitalizeName = (str) => {
    const wordArr = str.split(" ");
    const charArrs = wordArr.map(word => [...word].map((char,i) => i===0 ? char.toUpperCase() : char));
    const newWordArr = charArrs.map(arr => arr.join(""));
    return newWordArr.join(" ");
  }

  return (
    <div className="Product">
      <h1 className="Product-name">{capitalizeName(name)}</h1>
      <img className="Product-img" src={image_url} alt={name} />
      <h2 className="Product-price">{`$${price}`}</h2>
      <div className="Product-icon-div">
        {cartItems[id] ? 
          <div className="Product-qty">
            {cartItems[id].quantity}
          </div> :
          null
        }
        <FontAwesomeIcon icon={faCartPlus} className="Product-icon" onClick={handleCartClick}/>
        {cartItems[id] ? 
          <FontAwesomeIcon icon={faTrashAlt} className="Product-icon" onClick={handleTrashClick}/> :
          <FontAwesomeIcon icon={faTrashAlt} className="Product-icon Product-icon-disabled" disabled/>
        }
      </div>
    </div>
  )
}

export default Product;
