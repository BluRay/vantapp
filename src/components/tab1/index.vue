<template>
  <component :is="apps.component"></component>
</template>
<script>
import { defineAsyncComponent, shallowRef } from 'vue'
export default {
  name: 'tab1_index',
  components: {},
  data() {
    return {
      userToken: '',
      apps: null
    }
  },
  created() {
    this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab1/tab1-2.vue`))})
    // this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.userToken = sessionStorage.getItem('TOKEN');
    },
    btn_click(){
      // this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab1/tab1-1.vue`))})
    }
  }
}
</script>
<style scoped>
</style>