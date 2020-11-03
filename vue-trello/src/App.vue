<template>
  <div id="app">
    <NavBar />
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss"></style>
