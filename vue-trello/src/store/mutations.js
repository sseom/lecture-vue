import {setAuthInHeader}  from '@/api';

const mutations = { // 변이
  SET_IS_ADD_BOARD(state, toogle){
    state.isAddBoard = toogle;
  },
  SET_BOARD(state, board) {
    state.board = board; // 한개의 보드 셋팅
  },
  SET_BOARDS(state, boards) {
    state.boards = boards; // 여러개 보드 리스트를 셋팅만
  },
  LOGIN(state, token) { // 토큰정보 셋팅
    // 0. 토큰정보가 없으면 리턴
    if (!token) return;
    // 1. 있으면 상태.토큰에 토큰값을 셋팅 = 상태갱신
    state.token = token;
    // 2. 로컬스토리지에 토큰값을 저장
    localStorage.setItem('token', token);
    // 3. api에 리퀘스트 헤더를 셋팅
    setAuthInHeader(token);
  },
  LOGOUT(state) {
    // 1. 상태 토큰값을 널값으로 초기화
    state.token = null;
    // 2. 로컬스토리지에 토큰값을 삭제
    delete localStorage.token;
    // 3. api 요청헤드를 초기화
    setAuthInHeader(null);
  },
}

export default mutations