import * as api  from '@/api';

const actions = { 
  // 첫번째 인자는 컨텍스트 객체가 옴
  // {commit} 컨텍스트 객체의 commit 함수만 받고
  // 두번째 인자엔 payload (추가전달인자)

  // 보드 추가 
  ADD_BOARD(_, {title}) {
    return api.board.create(title)
      .then((data) => data.item );
  },
  FETCH_BOARD({commit}, {id}) { 
    return api.board.fetch(id)
      .then(data => {
        // 상태 갱신하도록 mutations 호출
        commit('SET_BOARD', data.item);
      });
  },
  FETCH_BOARDS({commit}) { 
    return api.board.fetch()
      .then(data => {
        // 상태 갱신하도록 mutations 호출
        commit('SET_BOARDS', data.list);
      });
  },
  ADD_CARD({dispatch, state}, {title, listId, pos}) {
    return api.card.create(title, listId, pos)
      .then(() => {
        // 카드생성이 되었으면 보드목록을 재조회하기
        dispatch('FETCH_BOARD', {id: state.board.id});
      });
  },
  FETCH_CARD({commit}, {id}) {
    return api.card.fetch(id)
      .then((data) => {
        // 상태 갱신하도록 mutations 호출
        commit('SET_CARD', data.item);
        console.log('data : ', data.item);
      });
  },
  UPDATE_CARD({dispatch, state}, {id, title, description, pos, listId}) {
    return api.card.update(id, {title, description, pos, listId})
      .then((data) => {
        console.log('data : ', data);
        // 카드생성이 되었으면 보드목록을 재조회하기
        dispatch('FETCH_BOARD', {id: state.board.id});
      });
  },
  // 로그인에 대한 액션 - api호출
  LOGIN({commit}, {email, password}) {
    return api.auth.login(email, password)
      .then(({accessToken}) => {
        console.log('accessToken : ', accessToken);
        // 로그인 응답받고 그중에 accessToken만 받고
        // 그 결과로 로그인 변이(뮤테이션)한테 위임
        commit('LOGIN', accessToken);
      });
  },
}

export default actions