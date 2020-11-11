import axios from 'axios'
import router from '../router';

// api를 호출하려면 도메인 정보가 필요
const DOMAIN = 'http://localhost:3000/';
const UNAUTHORIZED = 401;
const onUnauthoriaed = () => {
  router.push('/login');
};

// 백엔드 api 요청하는
const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url, // 도메인정보랑 합쳐서
    data,
  }).then(result => result.data)
  .catch(result => {
    const {status} = result.response;
    if( status === UNAUTHORIZED ) return onUnauthoriaed(); // 로그인페이지로 이동하도록
    throw Error(result); // 그외 처리하지 않은 페이지는 에러를 던짐
  })
}

export const borad = {
  fatch() { // 조회
    return request('get', '/borads');
  }
}

// login api 인증을 위한 
export const auth = {
  login(email, password) {
    return request('post', '/login', { email, password });
  }
}