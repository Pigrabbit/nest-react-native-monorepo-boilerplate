import axios from 'axios';

import Config from '../config';

const axiosInstance = axios.create({
  baseURL: Config.API_ENDPOINT,
  timeout: 5000,
});

export default axiosInstance;
