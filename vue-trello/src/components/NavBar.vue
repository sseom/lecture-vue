<template>
  <nav class="header">
    <div class="header-logo">
      <router-link to="/">Home</router-link>
    </div>
    <div class="header-auth">
      <a href="" v-if="isAuth" @click.prevent="logout">Logout</a>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { setAuthInHeader } from '../api';

export default {
  computed: {
    isAuth() { // 로그인이 됐는지 안됐는 지 체크
      console.log(!!localStorage.getItem('token'));
      return !!localStorage.getItem('token'); //boolean
    },
  },
  methods: {
    logout() { 
      // 토큰정보 제거
      delete localStorage.token;
      // api 호출할 때 헤더값에 토큰정보 담아서 보낸것을 기본값을 null로 
      setAuthInHeader(null);
      // 로그인페이지로 이동
      this.$router.push('/login');
    },
  }
}
</script>

<style>
  .header {
    flex: none;
    background-color: rgba(0,0,0,.15);
    height: 32px;
    padding: 4px;
  }
  .header a {
    display: block;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    color: rgba(255,255,255,.5);
  }
  .header-logo {
    position: absolute;
    left: 50%;
    top: 7px;
    margin-left: -30px;
    text-align: center;
    font-weight: bolder;
    font-size: 24px;
  }
  .header-logo a:hover,
  .header-logo a:focus {
    color: rgba(255,255,255,.9);
  }
  .header-auth {
    position: absolute;
    right: 15px;
    top: 5px;
  }
  .header-auth a {
    border-radius: 2px;
    padding: 0 10px;
    background-color: rgba(255,255,255, .5);
    color: white;
    transition: all .3s;
  }
  .header-auth a:hover,
  .header-auth a:focus {
    background-color: rgba(255,255,255, .3);
  }
</style>