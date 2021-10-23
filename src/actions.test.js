import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes.js';
import {add, remove} from './actions';

let testId;
let testItem;

beforeEach(() => {
  testId = 1;
  testItem = {
    name: "test item",
    description: "this item is awesome",
    price: 10.99,
    image_url: "www.google.com"
  }
})

//Add function should return an object with type 'ADD_TO_CART' and id and item properties
test('add works', () => {
  const res = add(testId, testItem);

  expect(res).toEqual({
    type: ADD_TO_CART, 
    id: 1, 
    item: {
      name: "test item",
      description: "this item is awesome",
      price: 10.99,
      image_url: "www.google.com"
    }
  })
});

//Remove function should return an object with type 'REMOVE_FROM_CART' and id property
test('remove works', () => {
  const res = remove(testId);
  expect(res).toEqual({
    type: REMOVE_FROM_CART, 
    id: 1
  })
});

