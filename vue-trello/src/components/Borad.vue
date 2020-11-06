<template>
  <div>
    Board
    <div v-if="loading">loading Board...</div>
    <div v-else>
      <div>Board Id : {{ boradId }}</div>
      <router-link :to="`/b/${boradId}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${boradId}/c/2`">Card 2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boradId: 0,
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
        // console.log('boradId:', this.$route.params.boradId);
        this.boradId = this.$route.params.boradId;
        this.loading = false;
      }, 500);
    },
  },
}
</script>

<style>

</style>