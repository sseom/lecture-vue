# Lecture Vue.js

### 인프런 온라인 강의 : 트렐로
- [트렐로 개발로 배우는 Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술](https://www.inflearn.com/course/vuejs/dashboard)

### Section 1. 라우팅
- 서버 라우팅 
  - 매번 주소 요청시 화면이 갱신됨 (ex. 네이버, 구글..)
- 브라우져 라우팅 
  - 전체 화면이 갱신되지 않고 필요한 데이터만 서버에 요청해서 화면을 갱신함 (ex. 구글메일, 트렐로..)
  - 주소 요청시 라우팅을 브라우저에서 처리하고 데이터는 백엔드 API를 통해 서버로부터 받아와서 데이터이용해서 화면에 뿌리는 구조

**스텝별 브랜치 작업**
1. [routing-basic](https://github.com/sseom/lecture-vue-trello/tree/routing/basic)

2. [vue-router](https://github.com/sseom/lecture-vue-trello/tree/routing/vue-router)

3. [route-instance](https://github.com/sseom/lecture-vue-trello/tree/routing/route-instance)

4. [router-view](https://github.com/sseom/lecture-vue-trello/tree/routing/router-view)
  - router-view 는 요청 URL에 따라서 화면이 변경됨

5. [router-link](https://github.com/sseom/lecture-vue-trello/tree/routing/router-link)
  - 링크 이동시 브라우저가 페이지를 다시 로드하지 않도록 한다.

6. [동적 라우트 매칭 dynamic](https://github.com/sseom/lecture-vue-trello/tree/routing/dynamic)
  - 라우팅 경로가 정적이지 않고 동적으로 바뀌는 것을 동적 라우트 매칭이라고 한다.

7. [중첩 라우트 nested](https://github.com/sseom/lecture-vue-trello/tree/routing/nested)
  - `children : [ { path: '/b/:boradId/c/:cardId', component: Card, } ]`

8. [데이터 불러오기 fetch](https://github.com/sseom/lecture-vue-trello/tree/routing/fetch)

### Section 2. API
1. [basic](https://github.com/sseom/lecture-vue-trello/tree/api/basic)

2. [Axios](https://github.com/sseom/lecture-vue-trello/tree/api/axios)

3. [Board](https://github.com/sseom/lecture-vue-trello/tree/api/board)

4. [Service](https://github.com/sseom/lecture-vue-trello/tree/api/service)

### Section 3.인증하기 Auth
1. [navigation-guard](https://github.com/sseom/lecture-vue-trello/tree/auth/navigation-guard)
2. [login](https://github.com/sseom/lecture-vue-trello/tree/auth/login)