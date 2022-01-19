import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import { cartReducer } from './store/reducers/cartReducer';
import { searchReducer } from './store/reducers/searchReduce';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  cartReducer,
  searchReducer,
})

const reduxStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {reduxStore} >
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
