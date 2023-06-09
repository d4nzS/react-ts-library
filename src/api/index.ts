import axios from 'axios';

import { token } from '../utils/auth';

export const HOST_URL = 'https://library-cleverland-2jfze.ondigitalocean.app';

const api = axios.create({ baseURL: HOST_URL });

api.interceptors.request.use(config => {
    if (!config.url?.includes('auth')) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
