import Vue from 'vue'
import router from './router'

// 4. router와 router 옵션을 전체 앱에 주입합니다.
new Vue({
  el: '#app',
  router,
  render: h => h({
    template: '<router-view></router-view>'
  })
})
