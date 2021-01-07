<template>
  <Modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input class="form-control" type="text" :value="card.title" readonly>
      </div>
      <a class="modal-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea  class="form-control" cols="30" rows="3" placeholder="Add a more detailed description..."
        readonly
        v-model="card.description"></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Modal from './Modal'

export default {
  components: {
    Modal,
  },
  created() {
    const cardId = this.$route.params.cardId;
    this.FETCH_CARD({id: cardId});
  },
  computed: {
    ...mapState({
      card: 'card',
      board: 'board'
    }),
  }, 
  methods: {
    ...mapActions(['FETCH_CARD']),
    onClose() {
      this.$router.push(`/b/${this.board.id}`);
    },
  }
}
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;  
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>