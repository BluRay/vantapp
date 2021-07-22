<template>
	<van-nav-bar title="Vant" />
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
			<van-button type="primary" round block native-type="submit">提交</van-button>
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
      username: 'admin',
      password: '123456',
    };
  },
	methods: {
  }
}
</script>
<style scoped>
</style>