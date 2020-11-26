import request from '@/utils/request';

export function getColumnList(params: any) {
  return request({ url: '/api/columns', method: 'get', params });
}
