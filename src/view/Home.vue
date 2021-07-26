<template>
	<van-nav-bar title="首页" left-text="返回" left-arrow @click-right="onClickRight">
    <template #right>
      <van-icon name="setting-o" size="22" />
    </template>
  </van-nav-bar>
  <component :is="apps.component"></component>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
    <van-tabbar-item icon="search">标签2</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Notify, Toast } from 'vant'
import { defineAsyncComponent, shallowRef } from 'vue'
export default {
  name: 'HomePage',
  components: {},
  data() {
    return {
      userToken: '',
      active: 0,
      show: true,
      apps: null
    }
  },
  created() {
    this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab1/index.vue`))})
    // this.apps = defineAsyncComponent(() => import(`@/components/tab1/index.vue`))
  },
  methods: {
    onChange(index) {
      this.active = index
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 300
      });
      switch (index) {
      case 0 :
        this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab1/index.vue`))})
        break;
      case 1 :
        this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab1/tab1-1.vue`))})
        break;
      }
    },
    onClickRight() {
      Notify({ type: 'primary', message: '退出成功' });
      this.$store.dispatch('logout', this.loginForm)
			.then(() => {
				this.$router.push({ path: '/login' })
			})
			.catch(() => {
			})
    }
  }
}
</script>
<style scoped>
</style>