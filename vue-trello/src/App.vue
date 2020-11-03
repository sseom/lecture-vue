<template>
  <div id="app">
    <!-- Header : 항상 고정될 부분들 -->
    {{ msg }}
    <router-view></router-view>
    <!-- Footer : 항상 고정될 부분들 -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '라우팅 경로에 따라 화면이 바껴야하는 부분들은 router-view를 통해 컴포넌트가 대채되어 화면이 변경됨.'
    }
  }
}
</script>

<style lang="scss"></style>
