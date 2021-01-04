<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in boards" :key="b.id" 
        :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{b.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="SET_IS_ADD_BOARD(true)">
          + Create new board...
        </a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard"></AddBoard>
  </div>
</template>

<script>
import { board } from '../api';
import AddBoard from './AddBoard';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    AddBoard,
  },
  data() {
    return {
      loading: false,
      error: '',
    }
  },
  computed: {
    // 이것을 객체 전개 연산자(Object Spread Operator)를 사용하여 외부 객체에 추가 하십시오.
    ...mapState([
      'isAddBoard',
      'boards'
    ])
  },
  created() { // 컴포넌트가 생성되면 fetchData에서 데이터를 가져옴
    this.fetchData();
  },
  updated() { // 만들어질때, 데이터객체에 변화가 감지되면 매번호출됨
    this.$refs.boardItem.forEach(el => {
      // console.log(el.dataset);
      el.style.backgroundColor = el.dataset.bgcolor;
    });
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD' // tthis.$store.commit('SET_IS_ADD_BOARD') 에 매핑합니다.
    ]),
    ...mapActions([
      'FETCH_BOARDS'
    ]),
    fetchData() {
      this.loading = true;
      this.FETCH_BOARDS()
        .finally(() => {
          this.loading = false;
        });
      
    },
  }
}
</script>

<style>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>