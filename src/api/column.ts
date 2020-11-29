import request from '@/utils/request';

export function getColumnList<T>(params?: T) {
  return request({ url: '/api/columns', method: 'get', params });
}

// extends 泛型约束
export function getColumnDetail<T extends { id: string }>(params: T) {
  return request({ url: `/api/columns/${params.id}`, method: 'get', params });
}

export function getPostList<T extends { id: string }>(params: T) {
  return request({ url: `/api/columns/${params.id}/posts`, method: 'get', params });
}
