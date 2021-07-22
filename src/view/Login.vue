<template>
	<van-nav-bar title="VantApp" />
	<van-form @submit="toHome">
		<van-field
			v-model="username"
			name="用户名"
			label="用户名"
			placeholder="用户名"
			:rules="[{ required: true, message: '请填写用户名' }]"
		/>
		<van-field
			v-model="password"
			type="password"
			name="密码"
			label="密码"
			placeholder="密码"
			:rules="[{ required: true, message: '请填写密码' }]"
		/>
		<div style="margin: 16px;">
			<van-button type="primary" round block @click="handleLogin">提交</van-button>
		</div>
		<p>{{$store.state.token}}</p>
	</van-form>
</template>
<script>
import { useRouter } from 'vue-router'
import { Toast  } from 'vant';
export default {
	setup () {
		const router = useRouter()
		const toHome = (() => {
			Toast.success('登录成功...');
			router.push({
				name: 'home'
			})
		})
		return {
			toHome
		}
	},
	data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      username: 'admin',
      password: '123456',
    };
  },
	methods: {
		handleLogin() {
			console.log('-->handleLogin')
			this.$store.dispatch('login', this.loginForm)
			.then(() => {
				this.$router.push({ path: this.redirect || '/home', query: this.otherQuery })
			})
			.catch(() => {
			})
		}
  }
}
</script>
<style scoped>
</style>