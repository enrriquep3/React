import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID q05gzv-gMt6RCWjmXTMlrQ_etPkLYIL_pYl4ppw_chM',
      }

});