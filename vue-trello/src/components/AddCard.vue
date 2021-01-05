<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" v-model="inputTitle" ref="inputText">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">
        Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTitle: ''
    }
  },
  computed: {
    invalidInput() {
      return !this.inputTitle.trim();
    }
  },
  mounted() {
    this.$refs.inputText.focus(); // 인풋창으로 자동 포커스
    this.setupClickOutside(this.$el); // 외부 클릭시 카드폼이 닫히도록
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    setupClickOutside(el) {  
      // console.log('el : ', el);
      document.querySelector('body').addEventListener('click', event => {
        // console.log('event.target : ', event.target);
        if( el.contains(event.target) ) return;
        this.$emit('close');
      })
    }
  }
}
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
