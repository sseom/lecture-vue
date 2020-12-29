import Vue from 'vue';
import Vuex from 'vuex';
import * as api  from '@/api';

Vue.use(Vuex);

// 스토어 객체
const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: [],
    token: null,
  },
  getters: { // 컴퓨티드속성이랑 좀 유사 사용시 isAuth 함수처럼이 아니라 !!변수처럼!! 사용가능
    // 첫번째 인자로 state를 받는다
    isAuth(state) { // 로그인 여부를 확인하는 
      return !!state.token; // 토큰 정보의 유무를 확인하도록 
    },
  },
  mutations: { // 변이
    SET_IS_ADD_BOARD(state, toogle){
      state.isAddBoard = toogle;
    },
    SET_BOARDS(state, boards) {
      state.boards = boards; // 리스트를 셋팅만
    },
    LOGIN(state, token) { // 토큰정보 셋팅
      // 0. 토큰정보가 없으면 리턴
      if( token ) return;
      // 1. 있으면 상태.토큰에 토큰값을 셋팅 = 상태갱신
      state.token = token;
      // 2. 로컬스토리지에 토큰값을 저장
      localStorage.setItem('token', token);
      // 3. api에 리퀘스트 헤더를 셋팅
      api.setAuthInHeader(token);
    },
    LOGOUT(state) {
      // 1. 상태 토큰값을 널값으로 초기화
      state.token = null;
      // 2. 로컬스토리지에 토큰값을 삭제
      delete localStorage.token;
      // 3. api 요청헤드를 초기화
      api.setAuthInHeader(null);
    },
  },
  actions: { 
    // 첫번째 인자는 컨텍스트 객체가 옴
    // {commit} 컨텍스트 객체의 commit 함수만 받고
    // 두번째 인자엔 payload (추가전달인자)

    // 보드 추가 
    ADD_BOARD(_, {title}) {
      return api.board.create(title);
    },
    FETCH_BOARD({commit}) { 
      return api.board.fetch()
        .then(res => {
          // 상태 갱신하도록 mutations 호출
          commit('SET_BOARDS', res.list);
        });
    },
    // 로그인에 대한 액션 - api호출
    LOGIN({commit}, {email, password}) {
      return api.auth.login(email, password)
        .then(({accessToken}) => {
          // 로그인 응답받고 그중에 accessToken만 받고
          // 그 결과로 로그인 변이(뮤테이션)한테 위임
          commit('LOGIN', accessToken);
        });
    },
  },
});

// 어플리케이션이 구동 되었을때 브라우저 저장소 확인 토큰의 유무 확인 후 로그인 처리
const { token } = localStorage; 
store.commit('LOGIN', token);

// 외부 사용 모듈오 export
export default store;