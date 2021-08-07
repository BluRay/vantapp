<template>
	<van-nav-bar title="VantApp" left-text="注册" @click-left="handleSignIn"/>
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		<van-swipe-item><van-icon name="smile-comment" /></van-swipe-item>
		<van-swipe-item><van-icon name="fire" /></van-swipe-item>
		<van-swipe-item><van-icon name="gift-card" /></van-swipe-item>
	</van-swipe>
	<van-form @submit="toHome">
		<van-field
			v-model="loginForm.username"
			name="用户名"
			label="用户名"
			placeholder="用户名"
			:rules="[{ required: true, message: '请填写用户名' }]"
		/>
		<van-field
			v-model="loginForm.password"
			type="password"
			name="密码"
			label="密码"
			placeholder="密码"
			:rules="[{ required: true, message: '请填写密码' }]"
		/>
		<div style="margin: 16px;">
			<van-button type="primary" round block size="normal" @click="handleLogin">登录</van-button>
		</div>
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
      }
    };
  },
	methods: {
		handleLogin() {
			console.log('-->handleLogin')
			this.$store.dispatch('login', this.loginForm)
			.then(() => {
				this.$router.push({ path: this.redirect || '/home' })
			})
			.catch(() => {
			})
		},
		handleSignIn() {
			console.log('-->handleSignIn')
			
		}
  }
}
</script>
<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>