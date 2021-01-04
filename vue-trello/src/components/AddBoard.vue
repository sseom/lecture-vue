<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a href="" class="modal-default-button" 
          @click.prevent="SET_IS_ADD_BOARD(false)">&times;</a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" 
        @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="input" ref="input" placeholder="board title">
      </form>
    </div>
    <div slot="footer">
      <button class="btn" :class="{'btn-success': valid}" type="submit" 
        form="add-board-form" :disabled="!valid">
        Create Board</button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import { mapMutations, mapActions } from 'vuex'
export default {
  components: {
    Modal,
  },
  data() {
    return {
      input: '',
      valid: false, // 입력값 검증
    }
  },
  watch: {
    input(v) {
      this.valid = v.trim().length > 0
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD',
    ]),
    ...mapActions([
      'ADD_BOARD',
      'FETCH_BOARD'
    ]),
    addBoard() {
      this.SET_IS_ADD_BOARD(false);
      this.ADD_BOARD({title: this.input})
        .then(({id}) => {
          // this.FETCH_BOARDS(); => 생성된 보드로 화면이 넘어가니 패치보드 필요없음
          this.$router.push(`/b/${id}`);
        });
    }
  }
}
</script>

<style>
</style>