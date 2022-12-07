import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.talkjs.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer '
  },
  responseType: 'json',
  timeout: 60000
});

export default axios;
