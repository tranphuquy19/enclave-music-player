/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import User from "../models/User";
import {USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../../shared/Types";

const userInitState = [User];

const userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload.data;
        case USER_REGISTER:
            return action.payload.data;
        case USER_LOGOUT:
            return User;
        default:
            return state;
    }
};

export default userReducer;
