import Vue from 'vue';
import Vuex from 'vuex';
import * as api  from '@/api';

Vue.use(Vuex);

// 스토어 객체
const store = new Vuex.Store({
  state: {
    isAddBoard: false,
  },
  mutations: { // 변이
    SET_IS_ADD_BOARD(state, toogle){
      state.isAddBoard = toogle;
    }
  },
  actions: {
    // 보드 추가 
    ADD_BOARD(_, {title}) {
      return api.board.create(title);
    }
  },
});

// 외부 사용 모듈오 export
export default store;