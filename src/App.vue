<style lang="stylus" rel="stylesheet/stylus">
*
  margin:0
  padding:0
  box-sizing:border-box
  list-style:none
  

::-webkit-scrollbar-track-piece
  background-color:rgba(0,0,0,0.2)
::-webkit-scrollbar
  width:5px
  height:5px
  border-radius:10px
::-webkit-scrollbar-thumb
  background-color:rgba(0,0,0,0.5)
  background-clip:padding-box
  border-radius:10px
  transition:0.2s
::-webkit-scrollbar-thumb:hover
  background-color:rgba(0,0,0,0.8)
</style>

<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>
  