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
  - `children : [ { path: '/b/:boardId/c/:cardId', component: Card, } ]`

8. [데이터 불러오기 fetch](https://github.com/sseom/lecture-vue-trello/tree/routing/fetch)

### Section 2. API
1. [basic](https://github.com/sseom/lecture-vue-trello/tree/api/basic)

2. [Axios](https://github.com/sseom/lecture-vue-trello/tree/api/axios)

3. [Board](https://github.com/sseom/lecture-vue-trello/tree/api/board)

4. [Service](https://github.com/sseom/lecture-vue-trello/tree/api/service)

### Section 3.인증하기 Auth
1. [navigation-guard](https://github.com/sseom/lecture-vue-trello/tree/auth/navigation-guard)
2. [login](https://github.com/sseom/lecture-vue-trello/tree/auth/login)
3. [logout](https://github.com/sseom/lecture-vue-trello/tree/auth/logout)

### Section 4.홈화면 Home
1. [보드  목록 조회 화면](https://github.com/sseom/lecture-vue-trello/tree/home/board-list)
2. [보드 추가하기](https://github.com/sseom/lecture-vue-trello/tree/home/board-add)
### Section 5.상태관리 Vuex 
1. [상태 State](https://github.com/sseom/lecture-vue-trello/tree/vuex/state)
2. [변이 Mutation](https://github.com/sseom/lecture-vue-trello/tree/vuex/mutation)
3. [액션 Action](https://github.com/sseom/lecture-vue-trello/tree/vuex/action)
4. [vuex 적용 - 보드목록 조회](https://github.com/sseom/lecture-vue-trello/tree/home/vuex)
5. [vuex 적용 - 인증1,2 (로그인 로그아웃)](https://github.com/sseom/lecture-vue-trello/tree/auth/vuex)
6. [스토어 개선 - 코드분리 리팩토링](https://github.com/sseom/lecture-vue-trello/tree/vuex/refactor)

### Section 6. 기본플로우 구현
1. [보드 조회 화면 개발 1](https://github.com/sseom/lecture-vue-trello/tree/board/query)
    - '보드추가' 버튼으로 보드를 생성하고 바로 보드 상세 화면으로 리다이렉트 하는 기능 추가
    - 보드 상세 화면으로 들어가면 보드를 조회 api를 호출해 결과를 화면에 뿌려기
2. [보드 조회 화면 개발 2](https://github.com/sseom/lecture-vue-trello/tree/board/markup)
    - 보드조회 - 자동생성된 리스트 내역 (todo, doing, done)
3. [카드 생성 1 - 마크업](https://github.com/sseom/lecture-vue-trello/tree/card/add-ui)
    - 카드생성 - 타이틀 입력
4. [카드 생성 2 - API 연동](https://github.com/sseom/lecture-vue-trello/tree/card/app-api)
5. [카드상세 조회 1 - 라우팅](https://github.com/sseom/lecture-vue-trello/tree/card/show-routing)
    - 생성된 카드아이템 클릭했을때 모달창(카드정보)이 뜨는 작업
