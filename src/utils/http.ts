// An highlighted block
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
 import { extend } from 'umi-request';
 import { notification } from 'antd';
 import Cookies from 'js-cookie';
 import {history} from 'umi';

 const codeMessage: any = {
   200: '服务器成功返回请求的数据。',
   201: '新建或修改数据成功。',
   202: '一个请求已经进入后台排队（异步任务）。',
   204: '删除数据成功。',
   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
   401: '用户没有权限（令牌、用户名、密码错误）。',
   403: '用户得到授权，但是访问是被禁止的。',
   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
   406: '请求的格式不可得。',
   410: '请求的资源被永久删除，且不会再得到的。',
   422: '当创建一个对象时，发生一个验证错误。',
   500: '服务器发生错误，请检查服务器。',
   502: '网关错误。',
   503: '服务不可用，服务器暂时过载或维护。',
   504: '网关超时。',
 };

//  const baseUrl = 'http://violet.pet:3301'
// const baseUrl = 'http://localhost:3001'
console.log(process.env.apiUrl);

 /**
  * 异常处理程序
  */
 const errorHandler = (error: { response: any }) => {
   const { response } = error;

   if (response && response.status) {
     const errorText = codeMessage[response.status] || response.statusText;
     const { status, url } = response;
     if (status === 401) {
       notification.warn({
         message: '请重新登陆!',
       });
       window.sessionStorage.removeItem('accessToken');
       Cookies.remove('accessToken');
       history.push('/user/login');
     } else {
       notification.error({
         message: `请求错误 ${status}: ${url}`,
         description: errorText,
       });
     }
   } else {
     notification.error({
       message: '请求错误'
     });
   }

   return response;
 };
 const request = extend({
   errorHandler,
   // 默认错误处理
   credentials: 'include', // 默认请求是否带上cookie
   prefix: process.env.apiUrl
   // params: {
   //   _r: Math.random() // 添加参数，防止缓存
   // }
 });

 // request拦截器, 改变url 或 options.
 request.interceptors.request.use((url, options) => {
   let accessToken =
     Cookies.get('accessToken') ||
     window.sessionStorage.getItem('accessToken');
   if (accessToken) {
     const headers = {
       'Authorization': `Bearer ${accessToken}`,
     };
     return {
       url: url,
       options: { ...options, headers: headers },
     };
   } else {
     return {
       url: url,
       options: { ...options }
     };
   }
 });
 request.interceptors.response.use(async response => {
   // 克隆响应对象做解析处理
   // 这里的res就是我们请求到的数据
   let token = response.headers.get('Authorization');
   if (token) {
     Cookies.set('accessToken', token);
   }
   const res = await response.clone().json();
   return res;
 });

 export default request;
