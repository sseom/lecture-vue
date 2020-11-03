<template>
  <div>
    Card
    <div>Card Id : {{ cardId }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardId: 0,
    }
  },
  created(){
    // console.log('cardId:', this.$route.params.cardId);
    this.cardId = this.$route.params.cardId;
  }
}
</script>

<style>

</style>