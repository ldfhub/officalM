import request from '@/utils/http';
// 注册
export const getRegisterInfo = (payload: any) => {
  return request('/api/register', {
    method: 'post',
    data: payload,
  });
};
// 登录
export const getLoginInfo = (payload: any) => {
  return request('/api/login', {
    method: 'post',
    data: payload,
  });
};
