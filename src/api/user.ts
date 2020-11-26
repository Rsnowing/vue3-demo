import request from '@/utils/request';
interface LoginProp {
  email: string;
  password: string;
}
export function login(data: LoginProp) {
  return request({ url: '/api/user/login', method: 'post', data });
}
