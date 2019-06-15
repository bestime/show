<style lang="stylus" rel="stylesheet/stylus">
@keyframes vbt-loading-spinner-fade
  0%
    opacity: .85
  50%
    opacity: .25
  100%
    opacity: .25

.vbt-loading-spinners
  position: relative
  display: block
  width: 1em
  height: 1em
.vbt-loading-spinner
  position:absolute
  left:50%
  top:0
  width: 1px
  height: 100%  
  opacity: .25
  animation: vbt-loading-spinner-fade 1s linear infinite
  background:none
  for num in (1..12)
    &:nth-child({num})
      animation-delay: ((num - 1) / 12)s
      transform: rotate(30deg * (num - 6)) translateY(0%)
.vbt-loading-vbt-sml
  display: block
  width:100%
  height:30%
  border-radius: 50%/20%

</style>

<template>
  <div class="vbt-loading-spinners" :style="style">
    <span class="vbt-loading-spinner" v-for="item in balde" :key="item">
      <span class="vbt-loading-vbt-sml" :style="{'background-color': color}"></span>
    </span>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'loading-vbt'
export default {
  name: COMPONENT_NAME,
  props: {
    size: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: '#000'
    },
    
  },
  data() {
    return {
      balde: 12
    }
  },
  
  computed: {
    style() {
      if (!this.size) return;
      const value = `${this.size}px`
      return {
        width: value,
        height: value
      }
    }
  }
}
</script>
