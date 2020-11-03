import Vue from 'vue'
import App from './App'
import router from './router'

// 4. router와 router 옵션을 전체 앱에 주입합니다.
new Vue({
  el: '#app',
  router, // 라우터 설정
  render: h => h(App), 
})
