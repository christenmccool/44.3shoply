import {ADD_TO_CART, REMOVE_FROM_CART} from '../actionTypes';

const INITIAL_VALUE = {total: 0, items:{}};

const cart = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.items[action.id]) {
        return {...state, 
                total: state.total + action.item.price,
                items: {...state.items, 
                        [action.id]: {...action.item, quantity: state.items[action.id].quantity + 1}
                        }
                };
      }
      return {...state, 
              total: state.total + action.item.price,
              items: {...state.items,
                      [action.id]: {...action.item, quantity: 1}
                     }
              };
    }
    case REMOVE_FROM_CART: {
      if (state.items[action.id]) {
        const remainingKeys = Object.keys(state.items).filter(id => id !== action.id);
        const remainingItems = {};
        remainingKeys.forEach(key => remainingItems[key]=state.items[key]);
        return {...state, 
                total: state.total - (state.items[action.id].price * state.items[action.id].quantity),
                items: remainingItems};
      }
      return state;
    }
    default: return state;
  }
}

export default cart;