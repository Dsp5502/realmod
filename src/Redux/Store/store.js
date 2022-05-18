import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { LoginReducers } from '../Reducers/loginReducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose();

const reducers = combineReducers({
  login: LoginReducers,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
