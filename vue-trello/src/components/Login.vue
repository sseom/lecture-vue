<template>
  <div class="login">
    <h2>Log in to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" 
          v-model="email" autofocus placeholder="test@test.com" />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input class="form-control" type="password" 
          v-model="password" placeholder="123123" />
      </div>
      <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit" 
        :disabled="invalidForm">Log In</button>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import { auth, setAuthInHeader } from '../api'

export default {
  data() {
    return {
      email: '', // 입력한 값 받는 변수
      password: '', // 입력한 값 받는 변수
      error: '', // 에러 결과 값
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password;
    }
  },
  created() { // 컴포넌트가 생성될때 
    this.rPath = this.$route.query.rPath || '/';
  },
  methods: {
    onSubmit() {
      console.log( this.email, this.password);

      // 로그인 api호출 : then 응답값 , catch 에러값
      auth.login( this.email, this.password )
        .then( data => {
          console.log(data); 
          localStorage.setItem('token', data.accessToken); // 토큰 정보를 로컬스토리지에 저장
          setAuthInHeader(data.accessToken);
          this.$router.push(this.rPath); // 루트경로로 리다이렉트
        })
        .catch( err => {
          // console.log(err);
          this.error = err.data.error;
        })
    }
  }
}
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto; 
}
.error {
  color: #f00;
}
</style>