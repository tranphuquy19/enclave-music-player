/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {applyMiddleware, compose, createStore} from "redux";
import masterReducer from "./reducers/MasterReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(masterReducer,
    composeEnhancer(applyMiddleware(thunk)),
);
