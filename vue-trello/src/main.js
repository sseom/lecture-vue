import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 

// 사용하려면 Vue.use() 라는 함수 사용 해서 추가해야함 = 미들웨어? 라고함
Vue.use(VueRouter)

// 1. 라우트 컴포넌트를 정의하세요.
// 아래 내용들은 다른 파일로부터 가져올 수 있습니다.
const Login = { template: '<div>Login Page</div>', }
const NotFound = { template: '<div>Page Not Found</div>', }

// 2. 라우트를 정의하세요.
// Each route should map to a component. The "component" can
// 각 라우트는 반드시 컴포넌트와 매핑되어야 합니다.
// "component"는 `Vue.extend()`를 통해 만들어진
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체입니다.
const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login },
  { path: '*', component: NotFound }, // 우선순위가 선언된 순서대로 정해짐
]

// 3. `routes` 옵션과 함께 router 인스턴스를 만드세요.
// 추가 옵션을 여기서 전달해야합니다.
// 지금은 간단하게 유지하겠습니다.
const router = new VueRouter({
  routes // `routes: routes`의 줄임
})


// 4. router와 router 옵션을 전체 앱에 주입합니다.
new Vue({
  el: '#app',
  router,
  render: h => h({
    template: '<router-view></router-view>'
  })
})
