import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';


export const store = createStore (
    appReducers,
    compose(  applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );