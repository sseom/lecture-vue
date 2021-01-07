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
      if( status === UNAUTHORIZED ) onUnauthoriaed(); // 로그인페이지로 이동하도록
      throw result.response; // 그외 처리하지 않은 페이지는 에러를 던짐
    })
}

// 모든 리퀘스트를 날리기전에 헤더값을 토큰정보로 설정
export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const board = {
  fetch(id) { // 조회
    return id ? request('get', `boards/${id}`) : request('get', 'boards');
  },
  create(title) { // 생성 
    // method, url, data
    return request('post', 'boards', {title});
  }
}

// login api 인증을 위한 
export const auth = {
  login(email, password) {
    // 
    return request('post', 'login', { email, password });
  }
}

// 카드 api
export const card = {
  create(title, listId, pos) {
    return request('post', 'cards', {title, listId, pos});
  }
}