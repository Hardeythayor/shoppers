import axios from 'axios';

const user = JSON.parse(localStorage.getItem("userObject"));

const apiUrl =  process.env.NODE_ENV !== 'production' ? 
            process.env.REACT_APP_BASE_DEV_URL :
                process.env.REACT_APP_BASE_PROD_URL

const axiosInstance = axios.create({
    baseURL: apiUrl, // Set your API base URL
    headers: {
      "Authorization" : `Bearer ${user?.access_token}`
    },
});

export default axiosInstance;