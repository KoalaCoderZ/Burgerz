
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

import rootReducer from './reducers';


const middleware = [
  thunk,
];


const finalCreateStore = composeWithDevTools(applyMiddleware(...middleware))(createStore);

const store = finalCreateStore(rootReducer);

export default store;
