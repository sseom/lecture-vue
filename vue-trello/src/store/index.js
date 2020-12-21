import Vue from 'vue';
import Vuex from 'vuex';

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
});

// 외부 사용 모듈오 export
export default store;