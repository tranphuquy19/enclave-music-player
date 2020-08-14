/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import axios from "axios";
import config from "./config";
import headerHelper from "./headerHelper";

const Client = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body,
        headers: headerHelper()
    });
};

export default Client;
