<template>
  <van-cell-group>
    <van-cell title="认证信息" :value="userToken" label="tab1" />
  </van-cell-group>
</template>
<script>
export default {
  data() {
    return {
      userToken: ''
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.userToken = sessionStorage.getItem('TOKEN');
    }
  }
}
</script>
<style scoped>
</style>