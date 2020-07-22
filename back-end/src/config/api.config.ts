import qs from 'qs';
import { PathLike } from 'fs';
import { appConfig } from './app.config';

const { apiUrl, rapidApiHost, rapidApiKey } = appConfig;

export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: apiUrl,
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-rapidapi-host": rapidApiHost,
            "x-rapidapi-key": rapidApiKey,
            "useQueryString": true
        }
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false })
}