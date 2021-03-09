import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1: in order to wire up a redux/react App, we need react-redux
// specifically need the provideer component to be around everything
import { Provider } from 'react-redux';
// 2: create redux store so redux exists and the provider has a store
import { createStore } from 'redux';
// 3: create reducers to populate the store
// 3a: always start with root/master reducer
import rootReducer from './reducers/rootReducer';
// 4: make individual reducers to hand to the rootReducer
// 5: create the store by passing it the rootReducer which is made up of the reducers
const theStore = createStore(rootReducer);
// Provider is the glue between react and redux - give it the store!

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
