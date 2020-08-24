import Client from "../utils/Client";

const loginUser = async (userPayload) => {
    const {data} = await Client('login', 'POST', userPayload);
    return data;
}

const registerUser = async (newUserPayload) => {
    const {data} = await Client('register', 'POST', newUserPayload);
    return data;
}

export {loginUser, registerUser};