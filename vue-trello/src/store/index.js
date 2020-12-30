import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 스토어 객체
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

// 어플리케이션이 구동 되었을때 브라우저 저장소 확인 토큰의 유무 확인 후 로그인 처리
const { token } = localStorage; 
store.commit('LOGIN', token);

// 외부 사용 모듈오 export
export default store;