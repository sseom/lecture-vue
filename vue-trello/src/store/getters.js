const getters = { // 컴퓨티드속성이랑 좀 유사 사용시 isAuth 함수처럼이 아니라 !!변수처럼!! 사용가능
  // 첫번째 인자로 state를 받는다
  isAuth(state) { // 로그인 여부를 확인하는 
    return !!state.token; // 토큰 정보의 유무를 확인하도록 
  },
}

export default getters