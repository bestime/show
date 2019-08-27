
<style lang="stylus" rel="stylesheet/stylus">
.router-list-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
  li
    font-size 0.39rem
    background #fff
    border-bottom #ddd solid 1px
    padding 0.4rem

</style>

<template>
  <div class="router-list-wrapper">
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="goTo(item)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { routerList } from '@src/router'
export default {
  data () {
    return {
      list: routerList.filter(item => item.name!=='路由汇总')
    }
  },
  beforeCreate () {
    document.title = '路由汇总'
  },
  methods: {
    goTo (item) {
      this.$router.push({ name: item.name })
    }
  }
}
</script>