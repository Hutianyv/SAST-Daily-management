import Taro from '@tarojs/taro';
import {axios} from 'taro-axios';

// 创建 axios 实例
const api = axios.create({
  baseURL: 'https://open.feishu.cn', // 设置基础请求地址
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理，比如添加token
    const token = Taro.getStorageSync('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  response => {
    // 处理响应数据
    return response.data;
  },
  error => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default api;
