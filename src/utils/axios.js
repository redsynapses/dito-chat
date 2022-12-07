import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.talkjs.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // TODO: need to add the Secret key (for calling the REST API), for example - 'Bearer sk_test_sq'
    Authorization: 'Bearer '
  },
  responseType: 'json',
  timeout: 60000
});

export default axios;
