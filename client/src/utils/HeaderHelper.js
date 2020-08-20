
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
