import axios from 'axios';
import { DEV_ADDRESS } from './api';

const axiosInstance = axios.create({
    baseURL: DEV_ADDRESS,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
