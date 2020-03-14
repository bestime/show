<style lang="stylus" rel="stylesheet/stylus">
.skill-item
  display inline-block
  vertical-align middle
  
  text-align center
  color #565183
  box-sizing border-box 
  margin 0 5px
  img
    width 100%
    height 100%
    display block
    transition 0.2s ease-out
  .skill-img
    width 50px
    height 50px
    padding 10px
    box-sizing border-box 
    border #59548a dashed 2px
    border-radius 50%
  span
    margin-top 5px
  &:hover
    img
      transform scale(1.5)
</style>

<template>
  <div class="skill-item">
    <div class="skill-img">
      <img :src="`./images/${type}.png`"/>
    </div>
    <span>{{ type }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>