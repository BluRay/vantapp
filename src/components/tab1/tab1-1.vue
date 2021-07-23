<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.USERNAME + ':' + item.MEMO" :title="item.USERNAME + ':' + item.MEMO" />
    </van-list>
  </van-pull-refresh>
</template>
<script>
import { userList } from '@/api/user'
export default {
  data() {
    return {
      tableData: {pageSize: 20,currentPage: 1},
      list: []
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      userList({
        pageSize: this.tableData.pageSize,
        currentPage: this.tableData.currentPage
      }).then(response => {
        this.list = response.data
      })
    }
  }
}
</script>
<style scoped>
</style>