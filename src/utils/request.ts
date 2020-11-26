import axios from 'axios';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 100000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

service.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  token && (config.headers['token'] = token);
  return config;
});

service.interceptors.response.use(response => {
  return response.data;
});

export default service;
