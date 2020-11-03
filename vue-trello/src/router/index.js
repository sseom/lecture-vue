import Vue from 'vue'
import VueRouter from 'vue-router' 
import Home from '../components/Home.vue' 
import Login from '../components/Login.vue' 
import NotFound from '../components/NotFound.vue' 
import Borad from '../components/Borad.vue' 

// 사용하려면 Vue.use() 라는 함수 사용 해서 추가해야함 = 미들웨어? 라고함
Vue.use(VueRouter)

// 2. 라우트를 정의하세요.
// Each route should map to a component. The "component" can
// 각 라우트는 반드시 컴포넌트와 매핑되어야 합니다.
// "component"는 `Vue.extend()`를 통해 만들어진
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체입니다.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/b/:boradId', component: Borad }, // :boradId 라는 변수로 id값 받음
  { path: '*', component: NotFound }, // 우선순위가 선언된 순서대로 정해짐
]

// 3. `routes` 옵션과 함께 router 인스턴스를 만드세요.
// 추가 옵션을 여기서 전달해야합니다.
// 지금은 간단하게 유지하겠습니다.
const router = new VueRouter({
  mode: 'history', // history API를 사용
  routes // `routes: routes`의 줄임
})

// 모듈로 사용할수 있도록 export
export default router 