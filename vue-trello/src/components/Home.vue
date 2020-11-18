<template>
  <div>
    Home
    <div>
      <h2>보드 리스트</h2>
      <div v-if="loading">loading...</div>
      <div v-else>
        <div v-for="board in boards" :key="board.id">
          {{ board }}
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { board } from '../api';

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

      board.fetch()
        .then(data => {
          // console.log(data);
          this.boards = data;
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