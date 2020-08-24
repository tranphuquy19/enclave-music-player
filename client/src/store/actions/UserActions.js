
import { USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../../utils/Types";
import User from "../models/User";
import { loginUser, registerUser } from "../../queries/UserQueries";

const login = (user) => {
    return async dispatch => {
        const resUser = await loginUser(user);
        localStorage.setItem('user', JSON.stringify(resUser));
        dispatch({type: USER_LOGIN, payload: resUser});
    }
};
const logout = () => {
    return async dispatch => {
        let removeUser = User;
        localStorage.setItem('user', JSON.stringify(removeUser));
        dispatch({type: USER_LOGOUT});
    }
};

const register = (newUser) => {
    return async dispatch => {
        const resUser = await registerUser(newUser);
        dispatch({type: USER_REGISTER, payload: resUser});
    }
};

export {login, logout, register}
