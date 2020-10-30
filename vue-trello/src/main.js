import Vue from 'vue'
import App from './App.vue'

// 1. 라우트 컴포넌트 : 로그인 
const Login = {
  template: '<div>Login Page</div>',
}

// 2. 라우트를 정의
// 라우터 맵을 자바스크립느 객체로 만듬
const routes = {
  '/': App,
  '/login': Login,

}

new Vue({
  el: '#app',
  computed: {
    VueComponent(){
      // 브라우저 요청 경로에 따라 컴포넌트를 다르게 반환
      return routes[window.location.pathname] || { template: '<div>Page Not Found</div>' }
    }
  },
  // render: h => h(App)
  render(h){
    return h(this.VueComponent)
  }
})
