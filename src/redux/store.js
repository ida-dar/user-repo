import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from '././userRedux';

// define initial state and shallow-merge initial data
const initialState = {
  user: {
    repos: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
  },
};

// define reducers
const reducers = {
  user: userReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
