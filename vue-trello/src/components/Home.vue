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
import { borad } from '../api';

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

      borad.fatch()
        .then(data => {
          this.boards = res.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>

<style>

</style>