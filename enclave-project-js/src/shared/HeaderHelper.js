/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

function getToken() {
    let token = JSON.parse(localStorage.getItem('user')) ? 'Bearer ' + JSON.parse(localStorage.getItem('user')).token : undefined;
    return token;
}

function headerHelper() {
    return {
        'Authorization': getToken(),
        'Content-Type': 'application/json'
    }
};

export default headerHelper;
