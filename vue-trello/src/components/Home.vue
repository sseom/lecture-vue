<template>
  <div>
    Home
    <div>
      <h2>보드 리스트</h2>
      <div v-if="loading">loading...</div>
      <div v-else>
        <div v-for="borad in boards" :key="borad.id">
          {{ borad }}
        </div>
      </div>
      <div v-if="error"><pre>{{ error }}</pre></div>
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
import axios from 'axios';

export default { 
  data() {
    return {
      loading: false,
      boards: [],
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.get('http://localhost:3000/boards')
        .then(res => { // 성공하면
          this.boards = res.data;
        })
        .catch(res => { // 실패시
          // $router 의 replace() 를 통해서 결로 이동
          this.$router.replace('/login');
        })
        .finally(() => { // then, catch가 모두 수행된 다음 실행
          this.loading = false;
        })
    }
  }
}
</script>

<style>

</style>