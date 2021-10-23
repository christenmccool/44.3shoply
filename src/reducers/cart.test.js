import {ADD_TO_CART, REMOVE_FROM_CART} from '../actionTypes';
import cart from './cart';
import {createStore} from 'redux';

let store;

let testId1, testId2;
let testItem1, testItem2;

beforeEach(() => {
  store = createStore(cart);

  testId1 = '1';
  testItem1 = {
    name: "test item 1",
    description: "this item is awesome",
    price: 10.99,
    image_url: "www.google.com"
  }

  testId2 = '2';
  testItem2 = {
    name: "test item 2",
    description: "this other item is also awesome",
    price: 2.49,
    image_url: "www.google.com"
  }
})

test("initial state of cart is empty items list and total of zero", () => {
  const startingState = store.getState();

  expect(startingState.total).toEqual(0);
  expect(startingState.items).toEqual({});
})

test("add works for first add of item", () => {
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});
  const newState = store.getState();

  expect(newState.total).toEqual(10.99);
  expect(newState.items).toEqual({[testId1]: {...testItem1, quantity: 1}});
})

test("add works for second add of item", () => {
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});

  const newState = store.getState();

  expect(newState.total).toEqual(21.98);
  expect(newState.items).toEqual({[testId1]: {...testItem1, quantity: 2}});
})

test("add works for two items", () => {
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});
  store.dispatch({type: ADD_TO_CART, id: testId2, item: testItem2});

  const newState = store.getState();

  expect(newState.total).toEqual(13.48);
  expect(newState.items).toEqual({
                                  [testId1]: {...testItem1, quantity: 1}, 
                                  [testId2]: {...testItem2, quantity: 1}
                                 });
})

test("no error for remove when id isn't in cart", () => {
  store.dispatch({type: REMOVE_FROM_CART, id: 0});
  const newState = store.getState();

  expect(newState.total).toEqual(0);
  expect(newState.items).toEqual({});
})

test("removed works when one item in cart", () => {
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});

  store.dispatch({type: REMOVE_FROM_CART, id: testId1});
  const newState = store.getState();
  expect(newState.total).toEqual(0);
  expect(newState.items).toEqual({});
})

test("removed works when two of an item are in cart", () => {
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});

  store.dispatch({type: REMOVE_FROM_CART, id: testId1});
  const newState = store.getState();
  expect(newState.total).toEqual(0);
  expect(newState.items).toEqual({});
})

test("removed works when two different items are in cart", () => {
  store.dispatch({type: ADD_TO_CART, id: testId1, item: testItem1});
  store.dispatch({type: ADD_TO_CART, id: testId2, item: testItem2});

  store.dispatch({type: REMOVE_FROM_CART, id: testId1});
  const newState = store.getState();
  expect(newState.total).toEqual(2.49);
  expect(newState.items).toEqual({[testId2]: {...testItem2, quantity: 1}});

})
