<template>
  <Modal>
    Card
    <div v-if="loading">loading card...</div>
    <div v-else>Card Id : {{ cardId }}</div>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  components: {
    Modal,
  },
  data() {
    return {
      cardId: 0,
      loading: false,
    }
  },
  watch: {
    '$route'() {
      // this.cardId = this.$route.parmas.cardId;
      this.fetchData();
    }
  },
  created(){
    this.fetchData();
  },
  // computed: {
  //   cardId() {
  //     return this.$route.params.cardId;
  //   }
  // },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        // console.log('cardId:', this.$route.params.cardId);
        this.cardId = this.$route.params.cardId;
        this.loading = false;
      }, 500);
    },
  }
}
</script>

<style>

</style>