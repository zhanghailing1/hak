import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8086/'



// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
export default axios