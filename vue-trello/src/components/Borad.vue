<template>
  <div>
    Board
    <div>Board Id : {{ boradId }}</div>
    <router-link :to="`/b/${boradId}/c/1`">Card 1</router-link>
    <router-link :to="`/b/${boradId}/c/2`">Card 2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boradId: 0,
    }
  },
  created(){
    // console.log('boradId:', this.$route.params.boradId);
    this.boradId = this.$route.params.boradId;
  }
}
</script>

<style>

</style>