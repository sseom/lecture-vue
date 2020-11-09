<template>
  <div>
    Home
    <div>
      <h2>보드 리스트</h2>
      <div v-if="loading">loading...</div>
      <div v-else>
        API result: {{ apiRes }}
      </div>
      <ul>
        <li>
          <router-link to="/b/1">Borad 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Borad 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default { 
  data() {
    return {
      loading: false,
      apiRes: ''
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      
      // 리퀘스트 객체
      const req = new XMLHttpRequest();

      // 1. 
      req.open('GET', 'http://localhost:3000/health'); // 메소드명 , 주소
      // 2. 클라이언트 쪽에서 백엔드쪽으로 요청 날림
      req.send();
      // 3. 요청이 완료 되면 load라는 이벤트 발생 해서 응답을 받음
      req.addEventListener('load', () => {
        this.loading = false;
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          Response: JSON.parse(req.response), // req.Response 순수 문자열로 오기때문에 JSON으로 파싱해줘야함
        }
      });
    }
  }
}
</script>

<style>

</style>