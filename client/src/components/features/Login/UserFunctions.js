import axios from 'axios'

export const register = newUser => {
    return axios
    .post('https://api.doraneko.tk/register', newUser)
    .then(res =>{
        console.log(res);
    })
    .catch(err => {
        console.log("registration error", err);
    })
}
export const login = user => {
    return axios
    .post('https://api.doraneko.tk/login', {
        username: user.username,
        password: user.password
    })
    .then(res =>{
        localStorage.setItem('usertoken', res.data.token)
        console.log(res);
    })
    .catch(err => {
        console.log("login error", err);
    })
}