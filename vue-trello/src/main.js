import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 4. router와 router 옵션을 전체 앱에 주입합니다.
new Vue({
  el: '#app',
  router, // 라우터 설정
  store, // 어플리케이션에서 vuex로만든 store를 사용
  render: h => h(App), 
})
