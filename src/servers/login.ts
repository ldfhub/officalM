import request from '@/utils/http';
export const getRegisterInfo = (payload: any) => {
  return request('/api/register', {
    method: 'post',
    data: payload,
  });
};
