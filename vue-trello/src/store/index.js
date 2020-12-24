import Vue from 'vue';
import Vuex from 'vuex';
import * as api  from '@/api';

Vue.use(Vuex);

// 스토어 객체
const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: [],
  },
  mutations: { // 변이
    SET_IS_ADD_BOARD(state, toogle){
      state.isAddBoard = toogle;
    },
    SET_BOARDS(state, boards) {
      state.boards = boards; // 리스트를 셋팅만
    },
  },
  actions: { 
    // 첫번째 인자는 컨텍스트 객체가 옴

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
  },
});

// 외부 사용 모듈오 export
export default store;