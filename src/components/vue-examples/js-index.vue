<style lang="stylus" rel="stylesheet/stylus">
.js-split
  li
    border-bottom:#d9d9d9 dashed 1px
    margin 0 10px
    padding:10px
    color:#666
    font-size 14px
    &:hover
      background #f9f9f9
</style>

<template>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['currentRouteName'])
  },

  methods: {
    
  }
}
</script>