import axios from 'axios';
import { DEV_ADDRESS } from '../../api/api';

const url = DEV_ADDRESS;
export const access_token = localStorage.getItem('token');
export const handleTodo = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
    },
});
