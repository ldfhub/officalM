import request from '@/utils/http';
export const getList = (payload: {}) => {
  return request('/api/query/queryList', {
    method: 'post',
    data: payload,
  });
};
