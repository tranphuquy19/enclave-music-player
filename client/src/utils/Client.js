/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import axios from "axios";
import config from "./Config";
import headerHelper from "./HeaderHelper";

const Client = (endpoint, method = 'GET', body) => {
    return axios({
        method,
        url: `${config.API_URL}/${endpoint}`,
        data: body,
        params: method === 'GET' ? body : undefined,
        headers: headerHelper()
    });
};

export default Client;
