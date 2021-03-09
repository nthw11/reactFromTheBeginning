//conventionally named index.js
//this is the root reducer! it is the store manager for all the reducers
//1: to make a root reducer we need to get a method from redux called combineReducers
import { combineReducers } from 'redux';
//2: get each individual reducer
import frozenReducer from './frozenReducer';
import produceReducer from './produceReducer';
import bakeryReducer from './bakeryReducer';
//3: call combineReducers and hand it an object
// each key in combineReducers will be a piece of state in the redux store
// each value will be the value of that piece of state in the redux store
const rootReducer = combineReducers({
  frozen: frozenReducer,
  produce: produceReducer,
  bakery: bakeryReducer,
});

export default rootReducer;
