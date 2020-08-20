
import {applyMiddleware, compose, createStore} from "redux";
import masterReducer from "./reducers/MasterReducer";
import thunk from "redux-thunk";

export const store = createStore(
    masterReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
