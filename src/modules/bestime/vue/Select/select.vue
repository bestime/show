<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"
.select-vbt
  height 36px
  display inline-flex
  padding 2px
  box-sizing border-box
  vertical-align middle
  font-size 14px
  min-width 100px
  .select-main
    user-select none
    display flex
    width 100%
    border $staticBorderColor solid 1px
    cursor pointer
    transition:0.15s  
    height 100%
    position:relative
    &:hover
      border-color getActiveColor(1)
  .text-wrapper
    font-size 14px
    color $staticTextColor
    display flex
    align-items center
    padding 0 10px
  &.active
    .select-more      
      transform scaleY(1)
      opacity 1
.select-more
  background #fff
  box-shadow 0 0 5px rgba(0,0,0,0.2)
  position absolute
  left 0  
  right 0
  list-style none
  padding 5px 0
  max-height 300px
  overflow auto
  overflow-x hidden  
  transform scaleY(0.7)  
  display none
  opacity 0  
  &.top
    top auto
    bottom 100%
    margin 0 0 5px 0
    transform-origin bottom
    transition transform 10s ease-out  
  &.bottom
    transform-origin top
    top 100%
    bottom auto
    margin 5px 0 0 0
    transition transform 10s ease-out
  li
    list-style none
    font-size 12px
    color $staticTextColor
    padding 6px 10px
    transition 0.1s
    &:hover
      background #f2f2f2
    &.active
      background getActiveColor(1)
      color #fff    
</style>

<template>
  <div class="select-vbt" :class="{'active': open}">
    <div ref="manWrapper" class="select-main" @click="toggle">
      <div class="text-wrapper">
        <TextOverflow class="text">{{showLabel}}</TextOverflow>
      </div>
      <ul ref="more" class="select-more" :class="[dir.vertical]">
        <li :class="{'active': item.key==value}" v-for="item in options" :key="item.key" @click="choose(item)">
          <TextOverflow line="1">{{ item.label }}</TextOverflow>
        </li>
      </ul>  
    </div>
  </div>  
</template>

<script>
import TextOverflow from '../TextOverflow/text'
import { isObject, domShowDir } from '../../js'
export default {
  name: 'select-vbt',
  components: {
    TextOverflow
  },
  props: {
    value: null,
    options: {
      type: Array,
      default () {
        return new Array(20).fill('').map((item, index) => {
          return {
            key: `a_${index}`,
            label: `选项${index}`
          }
        })
      }
    }
  },

  computed: {
    showLabel () {
      const item = this.options.find(item=>item.key==this.value)
      return isObject(item) ? item.label : '请选择'
    }
  },

  mounted () {
    this.$nextTick(() => {
      
    })
  },

  data () {
    return {
      dir: {},
      open: false
    }
  },

  methods: {
    choose (item) {
      this.$emit('input', item.key, item)
      this.$emit('on-select', item.key, item)
    },
    toggle () {
      if(!this.open) {        
        this.$refs.more.style.display = 'block'
        setTimeout(() => {
          this.dir = domShowDir(this.$refs.more)
          this.$nextTick(() => {   
            this.open = true
          })
        }, 16)
      } else {
         
        this.open = false
        this.$nextTick(()=> {
          setTimeout(() => {
            //this.dir = {}       
            //this.$refs.more.style.display = 'none'
          }, 200+16)
        })
      }
    }
  },
}
</script>