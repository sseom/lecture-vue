<template>
  <div>
    Board
    <div v-if="loading">loading Board...</div>
    <div v-else>
      <div>Board Id : {{ boardId }}</div>
      <router-link :to="`/b/${boardId}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${boardId}/c/2`">Card 2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardId: 0,
      loading: false,
    }
  },
  created(){
    this.fetchData();
  },
  methods: {
    fetchData() { // 백엔드 api를 호출하고 데이터를 요청하는 함수
      this.loading = true;
      setTimeout(() => { // 임시로 데이터 오는것처럼.. .5초 후에 뜸
        // console.log('boardId:', this.$route.params.boardId);
        this.boardId = this.$route.params.boardId;
        this.loading = false;
      }, 500);
    },
  },
}
</script>

<style>

</style>