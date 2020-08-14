/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {combineReducers} from "redux";
import userReducer from "./UserReducer";

const masterReducer = combineReducers({
    userReducer
});

export default masterReducer;
