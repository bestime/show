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
  <ul v-if="currentRouteName=='js'" class="js-split">
    <li v-for="(item, key, index) in ns" :key="index">{{index+1}}、{{key}}</li>
  </ul>
  <router-view v-else></router-view>
  
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