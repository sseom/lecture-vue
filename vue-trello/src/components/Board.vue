<template>
  <div>
    Board
    <div v-if="loading">loading Board...</div>
    <div v-else>
      <div>Board Id : {{ boardId }}</div>
      <pre>Board data : {{ board }}</pre>
      <router-link :to="`/b/${boardId}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${boardId}/c/2`">Card 2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      boardId: 0,
      loading: false,
    }
  },
  computed: {
    ...mapState(['board']),
  },
  created(){
    this.fetchData();
  },
  methods: {
    ...mapActions(['FETCH_BOARD']),
    fetchData() { // 백엔드 api를 호출하고 데이터를 요청하는 함수
      this.loading = true;

      this.FETCH_BOARD({id: this.$route.params.boardId})
        .then(() => this.loading = false);
    },
  },
}
</script>

<style>

</style>