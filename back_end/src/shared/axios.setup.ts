import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = Axios.create(config);

    /*
        Add default headers, interceptors etc..
    */

    return axiosInstance;
};

export default initialization;