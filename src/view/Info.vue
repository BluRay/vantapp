<template>
  <van-cell-group>
    <van-cell title="认证信息" :value="userToken" label="sessionStorage" />
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