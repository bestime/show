<style lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0
  border none
  box-sizing border-box
.main-box
  max-width 10.80rem
  margin 0 auto
  position relative
  position absolute
  top 0
  bottom 0
  left 0
  right 0
.mmks45tewas
  background #fff
  border #ddd solid 1px
  border-left none 
  border-right none
  border-top none
  li
    padding-left 0.4rem
    &:nth-of-type(1)
      .cnts
        border-top none
    &.disabled
      background #f9f9f9
  .cnts
    border-top #ddd solid 1px
    display flex
    align-items center
    justify-content space-between
    font-size 0.39rem
    line-height 1.3rem
    padding-right 0.4rem
    .prefx
      color #999
    .dwdv
      color #666
  .form-input-wrapper
    border none
    flex 1
    padding-right 0
    input
      text-align right
  .img-icon
    display none
.xjiousliowuet
  display flex
  flex 1
  align-items stretch
  justify-content center
  .as15e7
    width 0.46rem
    height 0.3rem
  .jieg45
    padding-left 0.3rem
    display flex
    align-items center
    justify-content center
</style>

<template>
  <div class="main-box" id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      
    }
  },

  mounted () {
    
  },

  methods: {
    
  }
}
</script>
