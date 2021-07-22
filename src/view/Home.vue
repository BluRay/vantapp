<template>
	<van-nav-bar title="首页" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="setting-o" size="18" />
    </template>
  </van-nav-bar>
  <van-cell-group>
    <van-cell title="认证信息" :value="$store.state.token" label="TOKEN" />
  </van-cell-group>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
    <van-tabbar-item icon="search">标签2</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Notify } from 'vant';
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onChange(index) {
      this.active = index
      Notify({ type: 'primary', message: index });
    },
  }
}
</script>
<style scoped>
</style>