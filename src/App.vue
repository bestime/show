<style lang="stylus" rel="stylesheet/stylus">
</style>

<template>
  <div class="main-box" id="app">
    <h1>hello</h1>
    <switch-vbt v-model="isOpen" @on-change="change">开关{{ isOpen }}</switch-vbt>
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
