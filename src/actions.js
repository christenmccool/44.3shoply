import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes.js';

/** takes id, item object as arguments
 * returns object with type property set to 'ADD_TO_CART' and id and item properties
 **/

function add(id, item) {
  return {
      type: ADD_TO_CART,
      id, 
      item
  };
}

/** takes id as argument
 * returns object with type property set to 'REMOVE_FROM_CART' and id property
 **/

function remove(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  };
}

export {add, remove};