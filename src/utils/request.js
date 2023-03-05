import axios from 'axios'
import { Toast } from 'vant';
import { getToken, deleteToken } from '@/utils/token'
import router from '@/router'


axios.defaults.baseURL = 'http://vfq85y.natappfree.cc';
// axios.defaults.timeout = 10000;


//拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  if(getToken())
  config.headers.token = `${getToken()}`
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  const msg = error.response.data.msg
  if(msg) {
    Toast.fail(msg);
  }
  if(error.response.status === 401) {
    Toast.fail('请重新登录');
    deleteToken()
    this.$router.push('/login')
  }
  return Promise.reject(error);
});


// 调用 axios.create() 函数，创建一个 axios 的实例对象，用 request 来接收
// const request = axios.create({
//   // 指定请求的根路径
//   baseURL: 'https://applet-base-api-t.itheima.net'
// })

export default axios
