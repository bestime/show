<style lang="stylus" rel="stylesheet/stylus">
</style>

<template>
  <div class="main-box" id="app">    
    <switch-vbt v-model="isOpen" @on-change="change">测试{{ isOpen }}</switch-vbt>
    <div class="router-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    change (toVal) {
      this.isOpen = toVal
    }
  },
}
</script>
  