<template>
	<van-nav-bar title="首页" left-text="返回" left-arrow @click-right="onClickRight">
    <template #right>
      <van-icon name="setting-o" size="22" />
    </template>
  </van-nav-bar>
  <component :is="apps.component"></component>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o">用户</van-tabbar-item>
    <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
  <van-popup v-model:show="popupShow" position="right" :style="{ height: '100%' }">
    <van-sidebar v-model="active">
      <van-sidebar-item title="个人中心" />
      <van-sidebar-item badge="8" title="系统消息" />
      <van-sidebar-item @click="handleLogout" title="退出" />
    </van-sidebar>
  </van-popup>
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
      popupShow: false,
      apps: null
    }
  },
  created() {
    this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab1/index.vue`))})
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
      case 2 :
        this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab2/index.vue`))})
        break;
      case 3 :
        this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab3/index.vue`))})
        break;
      }
    },
    onClickRight() {
      this.popupShow = true
    },
    handleLogout(){
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