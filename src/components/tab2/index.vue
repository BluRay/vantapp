<template>
  <span>tab2-index</span>
</template>
<script>
export default {
  name: 'tab2_index',
  components: {},
  data() {
    return {
      userToken: '',
      apps: null
    }
  },
  created() {
  },
  methods: {
    btn_click(){
      // this.apps = shallowRef({component: defineAsyncComponent(() => import(`@/components/tab1/tab1-1.vue`))})
    }
  }
}
</script>
<style scoped>
</style>