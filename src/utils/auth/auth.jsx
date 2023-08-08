import axios from 'axios';
import { DEV_ADDRESS } from '../../api/api';

const url = DEV_ADDRESS;
export const auth = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});
