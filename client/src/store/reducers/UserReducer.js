
import User from "../models/User";
import {USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../../utils/Types";

let userLogged = JSON.parse(localStorage.getItem('user'));

const userInitState = userLogged || User;

export const userReducer = (state = userInitState, {type, payload}) => {
    switch (type) {
        case USER_LOGIN:
            return {...payload};
        case USER_REGISTER:
            return {...payload};
        case USER_LOGOUT:
            return User;
        default:
            return state;
    }
};
