import inventory from './inventory';
import cart from './cart';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({inventory, cart});

export default rootReducer;
