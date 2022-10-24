import axios from 'axios';

import { API_URL } from '../contants/Config';


const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export default axiosClient;
