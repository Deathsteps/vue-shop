<template>
<div class="view">
	<div class="login-form">
		<div class="login-input-bar">
			<div class="login-input-label">
				手机号码
			</div>
			<input v-model.trim="username" class="login-input" placeholder="请输入手机号码" type="tel" />
		</div>
		<div class="login-input-bar">
			<div class="login-input-label">
				密码
			</div>
			<input v-model.trim="password" class="login-input" placeholder="请输入密码" type="password" />
		</div>
	</div>
	<div class="big-button" @click="login({username, password})">
		登录
	</div>
	<a class="login-forget">忘记密码</a>
  <fixed-footer :back="true"></fixed-footer>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import FixedFooter from './commons/FixedFooter'

export default {
  name: 'login',
  components: {
    FixedFooter
  },
  data () {
    return this.$store.state.login
  },
  methods: {
    ...mapActions(['login'])
  },
  watch: {
    token (newToken) {
      if (newToken) {
        // 跳转回去
        console.log(this.$router.currentRoute.query.redirect.slice(1))
        this.$router.replace(this.$router.currentRoute.query.redirect.slice(1))
      }
    }
  }
}
</script>

<style>
.login-form {
  margin-top: 1rem;
  background-color: white;
}
.login-input-bar {
  height: 3.125rem;
  line-height: 3.125rem;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 .5rem;
  display: flex;
}
.login-input-label {
  font-size: 0.9375rem;
  color: #4a4a4a;
  width: 30%;
}
input.login-input {
  height: 3rem;
  line-height: 3rem;
  width: 70%;
}
.login-forget {
  margin-top: 1rem;
  text-align: right;
  padding-right: .5rem;
  font-size: 0.9375rem;
  color: #4a4a4a;
  display: block;
}
</style>
