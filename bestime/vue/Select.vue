<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.select-vbt
  height 36px
  display inline-flex
  padding 2px
  box-sizing border-box
  vertical-align middle
  font-size 12px
  min-width 100px
  .iconfont
    font-size 12px
    color #999
    transition: 0.2s
    &:hover
      transform rotate(90deg)
      color #444
  .select-main
    user-select none
    display flex
    width 100%
    border $staticBorderColor solid 1px
    cursor pointer
    transition:0.15s
    position:relative
    display flex
    align-items stretch
    justify-content space-between    
    &:hover
      border-color getActiveColor(1)
    .text-wrapper  
      &:after
        content ''
        display block
        width 0
        height 0
        border-left 4px solid transparent
        border-right 4px solid transparent
        border-top 5px solid $staticTextColor
        transition 0.2s ease-out
        position absolute
        right 10px
        top 50%
        margin-top:-2px
  .text-wrapper
    font-size 14px
    color $staticTextColor
    display flex
    align-items center
    padding 0 0 0 10px
    margin 0
    width 100%
    position relative  
  &.active
    .select-more
      transform scaleY(1)
      opacity 1
    .select-main
      box-shadow 0 0 0 2px getActiveColor(0.2)
      border-color getActiveColor(1)
      .text-wrapper
        &:after
          transform rotate(180deg)      
  &.close-to
    .select-more      
      transform scaleY(0.7)
      opacity 0  
  &.placeholder
    .text-wrapper
      color $staticDisabledColor
    .select-main .text-wrapper:after
      border-top-color $staticDisabledColor
.select-more
  background #fff
  box-shadow 0 0 5px rgba(0,0,0,0.2)
  position absolute
  z-index:20
  left 0  
  right 0
  list-style none
  padding 5px 0
  max-height 300px
  overflow auto
  overflow-x hidden
  display none
  opacity 0
  transform scaleY(0.5)
  transition transform 0.2s ease-out,opacity 0.2s ease-out
  transform-origin top
  top 100%
  bottom auto
  margin 5px 0 0 0
  &.top
    top auto
    bottom 100%
    margin 0 0 5px 0
    transform-origin bottom  
  li
    list-style none
    font-size 12px
    color $staticTextColor
    padding 6px 10px
    transition 0.1s
    cursor pointer
    display flex
    align-items center
    justify-content space-between
    &:hover
      background #f2f2f2
    &.active
      background getActiveColor(1)
      color #fff  
  .no-data
    font-size 12px
    color $staticDisabledColor
    text-align center
    padding 5px 0
.hasCancel
  .del-wrapper
    position:absolute
    top:0
    right 0
    bottom 0
    z-index 20    
    align-items center
    justify-content center
    padding 0 7px
    display none
  .text-wrapper
    &:hover
      .del-wrapper
        display flex
      &:after
        display none
</style>

<template>
  <div class="select-vbt" :class="{'active': open, 'close-to': startClose, 'placeholder': !showLabel, 'hasCancel': showLabel}">
    <div ref="manWrapper" class="select-main" @click="toggle">
      <div class="text-wrapper">
        <TextOverflow class="text" line="1">{{ showLabel || placeholder }}</TextOverflow>
        <div class="del-wrapper" v-if="showLabel" @click="clear">
          
        </div>     
      </div>
      
      <ul id="test" ref="more" class="select-more" :class="[dir.vertical]">
        <div v-if="!options.length" class="no-data">暂无选项</div>
        <li :class="{'active': !isEmpty(value) && item[useKey]==value}" v-for="item in options" :key="item[useKey]" @click.stop="choose(item)">
          <TextOverflow line="1">{{ item.label }}</TextOverflow>
          <div v-if="hasProp(deleteItem)" class="iconfont" @click.stop="remove(item)">&#xe603;</div>
        </li>
      </ul>  
    </div>
  </div>  
</template>

<script>
import TextOverflow from './TextOverflow.vue'
import { isObject, domShowDir, bind, unbind, createUUID, prevent, isEmpty } from '../js'
import { hasProp } from './vue-tool'

const testArr = new Array(15).fill('').map((item, index) => {
  return {
    key: `a_${index}`,
    label: `示例${index}`
  }
})

export default {
  name: 'select-vbt',
  components: { TextOverflow },
  props: {
    deleteItem: null,
    value: null,
    placeholder: {
      type: String,
      default: '请选择'
    },   
    useKey: {
      type: String,
      default () {
        return 'key'
      }
    },
    options: {
      type: Array,
      default () {
        return testArr
      }
    }
  },

  computed: {
    showLabel () {
      let item = null;
      if(!isEmpty(this.value)) {
        item = this.options.find(item=>item[this.useKey]==this.value)
      }
      return isObject(item) ? item.label : null
    }
  },

  beforeDestroy () {
    unbind(document, `select${this.uuid}`, 'click')
  },

  data () {
    return {
      dir: {},
      open: false,
      startClose: false,
      uuid: createUUID(),
      clearing: false
    }
  },

  mounted () {
    bind(document, `select${this.uuid}`, 'click', this.bodyClick)
  },

  methods: {
    hasProp,
    isEmpty,
    bodyClick () {
      if(this.open) {
        console.log('下拉关闭')
        this.close()
      }
    },

    remove (item) {
      this.$emit('on-remove', item[this.useKey], item)
    },

    choose (item) {
      this.$emit('input', item[this.useKey], item)
      this.$emit('on-select', item[this.useKey], item)
      this.close()
    },

    clear (e) {
      this.clearing = true
      if(this.open) {
        prevent(e)
        this.close()
      }
      const emptyIem = {}
      this.$emit('input', '', emptyIem)
      this.$emit('on-select', '', emptyIem)
    },

    toggle () {
      if(this.clearing) return this.clearing = false;
      this.open ? this.close() : this.show()
    },

    show () {   
      this.$refs.more && (this.$refs.more.style.display = 'block');
      setTimeout(() => {
        this.dir = domShowDir(this.$refs.more)
        this.$nextTick(() => {   
          this.open = true
        })
      }, 16)
    },

    close () {
      this.startClose = true
      this.$nextTick(()=> {
        setTimeout(() => {
          this.open = false
          this.startClose = false
          this.dir = {}
          this.$refs.more && (this.$refs.more.style.display = 'none');
        }, 200)
      })
    }
  },
}
</script>