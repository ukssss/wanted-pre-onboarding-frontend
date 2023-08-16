import axios from 'axios';
import { DEV_ADDRESS, PROD_ADDRESS } from './api';

const axiosInstance = axios.create({
    baseURL: PROD_ADDRESS,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
