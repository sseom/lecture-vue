<template>
  <div>
    Board
    <div>boradId : {{ boradId }}</div>
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