import { render, screen } from '@testing-library/react';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

test('renders without crashing', () => {
  render(<Provider store={store}><App /></Provider>);
});
