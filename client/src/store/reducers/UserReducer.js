/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import User from "../models/User";
import {USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../../utils/Types";

const userInitState = User;

export const userReducer = (state = userInitState, {type, payload}) => {
    switch (type) {
        case USER_LOGIN:
            return {...payload.data};
        case USER_REGISTER:
            return {...payload.data};
        case USER_LOGOUT:
            return User;
        default:
            return state;
    }
};
