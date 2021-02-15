<template>
  <Modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input ref="inputTitle" class="form-control" type="text" :value="card.title" :readonly="!toogleTitle" @click="toogleTitle = true" @blur="onBlurTitle">
      </div>
      <a class="modal-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea  
        ref="inputDesc"
        class="form-control" 
        cols="30" 
        rows="3" 
        placeholder="Add a more detailed description..."
        v-model="card.description" 
        :readonly="!toogleDesc" 
        @click="toogleDesc = true" 
        @blur="onBlurDesc"
      ></textarea>
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
  data(){
    return {
      toogleTitle: true,
      toogleDesc: true,
    }
  },
  created() {
    this.fetchCard();
  },
  computed: {
    ...mapState({
      card: 'card',
      board: 'board'
    }),
  }, 
  methods: {
    ...mapActions(['FETCH_CARD', 'UPDATE_CARD']),
    onClose() {
      this.$router.push(`/b/${this.board.id}`);
    },
    onBlurTitle() {
      // 인풋입력 상태값 변경
      this.toogleTitle = false;
      const title = this.$refs.inputTitle.value.trim();
      console.log('this.card : ', this.card);
      if( !title ) return false;
      this.UPDATE_CARD({id: this.card.id, title })
        .then(() => this.fetchCard());
    },
    onBlurDesc() {
      // 인풋입력 상태값 변경
      this.toogleDesc = false;
      const description = this.$refs.inputDesc.value.trim();
      console.log('this.card : ', this.card);
      if( !description ) return false;
      this.UPDATE_CARD({id: this.card.id, description })
        .then(() => this.fetchCard());
    },
    fetchCard() {
      const cardId = this.$route.params.cardId;
      this.FETCH_CARD({id: cardId});
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