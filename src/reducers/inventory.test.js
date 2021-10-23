import {products} from '../data.json'
import inventory from './inventory';
import {createStore} from 'redux';

const store = createStore(inventory);

test("inventory contains items from data.json", () => {
  const startingState = store.getState();

  expect(startingState).toEqual(products);
})

