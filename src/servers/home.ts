import request from "@/utils/http"
export const getHomeList = (payload:{}) => {
  return request('/api/queryH/queryHome',{
    method: 'post',
    data: payload,
  })
}
