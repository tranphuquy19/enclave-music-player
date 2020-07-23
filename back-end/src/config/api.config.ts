import qs from 'qs';
import { PathLike } from 'fs';
import { appConfig } from './app.config';

const { rapidApiHost, rapidApiKey } = appConfig;

export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: rapidApiHost,
    headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": rapidApiHost,
        "x-rapidapi-key": rapidApiKey,
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false })
}