import React from 'react';
import {useSelector} from 'react-redux';
import './ProductList.css';
import Product from './Product';

const ProductList = () => {
  const inventory = useSelector(store => store.inventory);

  return (
    <div className="ProductList">
      {Object.keys(inventory).map(id => 
            <Product 
              key={id}
              id={id}
              name={inventory[id].name}
              description={inventory[id].description}
              image_url={inventory[id].image_url}
              price={inventory[id].price}
            />)}
    </div>
  )
}

export default ProductList;