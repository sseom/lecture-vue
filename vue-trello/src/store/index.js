import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 스토어 객체
const store = new Vuex.Store({
  state: {
    isAddBoard: false,
  },
});

// 외부 사용 모듈오 export
export default store;