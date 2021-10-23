import {ADD_TO_CART, REMOVE_FROM_CART} from '../actionTypes';
import {products} from '../data.json'

import rootReducer from './rootReducer';

import {createStore} from 'redux';

const store = createStore(rootReducer);


test("initial state of cart is empty items list and total of zero, inventory matches data.json ", () => {
  const startingState = store.getState();

  expect(startingState.cart).toEqual({total: 0, items: {}});
  expect(startingState.inventory).toEqual(products);
})

