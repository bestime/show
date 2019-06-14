<style lang="stylus" rel="stylesheet/stylus">
.image-vbt-wrapper  
  display inline-flex
  align-items center
  justify-content center
  background:#d9d9d9
  position:relative
  box-sizing border-box
  img
    margin 0 !important
    border none !important
    vertical-align middle
  svg
    width 100%
    height 100%
    vertical-align middle
    fill #dcdcdc
.image-vbt
  display block
  width 100%
  height 100%
  border none 
  margin 0
.image-vbt-default
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  z-index 1
  background:#f3f3f3
.image-vbt-loading-box
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  z-index 1
  display flex
  align-items center
  justify-content center
  background #f3f3f3

</style>

<template>
  <div class="image-vbt-wrapper" @click="$emit('click')" :original-src="src || '空'">
    <img class="image-vbt" @error="on_err" @load="on_load" :src="useSrc"/>
    <div class="image-vbt-default" v-if="showDefault">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M915.2 280.4l-165-8-9.6-107.6c-2-22.6-22.2-38.4-45.8-36.6L103 176.8c-23.6 2-40.6 21-38.8 43.4l42.4 471.6c2 22.6 22.4 38.4 45.8 36.6l30-2.4-4.8 91.6c-1.2 25.2 18.4 45.6 44.8 47L882.6 896c26.4 1.2 48.2-17.2 49.6-42.4L960 327c1.2-25-18.6-45.4-44.8-46.6z m-709.8 10.6l-14.2 269.6L156.2 610 124 254v-2c2-10 8.8-18 19.2-18.8l522-42.8c10.4-0.8 19.4 6 21 15.8 0 0.4 0.6 0.4 0.6 0.8 0 0.2 0.6 0.4 0.6 0.8l5.4 61.6-438-21c-26.4-0.8-48.2 17.6-49.4 42.6z m668 473.8l-169.6-199-74.8 68.6-138.4-161.6-245.4 261.4L266 336v-0.8c2-10.8 12.4-18.6 23.8-18l582.4 28c11.6 0.6 20.6 9.4 20.8 20.4 0 0.4 0.6 0.6 0.6 1l-20.2 398.2z"></path>
        <path d="M768 512c35.2 0 64-28.8 64-64s-28.6-64-64-64c-35.2 0-64 28.6-64 64s28.6 64 64 64z"></path>
      </svg>
    </div>
    <div class="image-vbt-loading-box" v-if="doing">
      <Loading/>
    </div>
  </div>  
</template>

<script>
import Loading from './Loading.vue'
export default {
  name: 'image-vbt',
  components: { Loading },
  props: {

    // 图片地址
    src: null,

    // 待选图片列表
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      errIdx: -1,
      useSrc: '',
      showDefault: false,
      doing: true,
      timer: null
    }
  },

  beforeMount () {
    this.useSrc = this.src
  },

  beforeDestroy () {
    this.toEmptyTimer()
  },

  methods: {
    on_err () {
      this.doing = true
      this.useSrc = this.getDifferentPic()      
    },

    getDifferentPic () {
      this.errIdx++      
      if(this.errIdx > this.list.length-1) {
        // 没有有效图片,使用默认图片
        this.showDefault = true
        this.doing = false        
        return false
      } else if(this.list[this.errIdx]===this.useSrc) {
        return this.getDifferentPic()
      } else {        
        return this.list[this.errIdx]
      }
    },

    on_load () {
      this.doing = false
      this.showDefault = false
      this.toEmptyTimer()      
    },

    toEmptyTimer () {
      clearTimeout(this.timer)
      this.timer = null
    }
  },
  watch: {
    src (newSrc) {
      this.on_load()
      this.useSrc = newSrc
    }
  }
}
</script>