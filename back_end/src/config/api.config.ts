import { appConfig } from './app.config';
import { AxiosRequestConfig } from 'axios';

const { rapidApiHost, rapidApiKey } = appConfig;

export const apiConfig: AxiosRequestConfig = {
    timeout: 3000,
    baseURL: rapidApiHost,
    headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": rapidApiHost,
        "x-rapidapi-key": rapidApiKey,
    },
}