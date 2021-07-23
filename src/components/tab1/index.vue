<template>
  <p>Tab1 Index</p>
  <van-cell-group>
    <van-cell title="认证信息" :value="userToken" label="tab1" />
  </van-cell-group>
</template>
<script>
export default {
  data() {
    return {
      userToken: '',
      active: 0
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>