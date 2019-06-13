<style lang="stylus" rel="stylesheet/stylus">
.vbt-full-item
  .swiper-slide
    height: auto
    min-height:100%
.slide-item-wrapper
  display:flex
  flex-direction:column

</style>


<template>
  <div class="swiper-slide">
    <div ref="el" class="swiper-container vbt-full-item">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide-item-wrapper" :style="itemStyle">
          <slot></slot>
        </div>
      </div>   
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
function tempFunc () {} 
export default {
  name: 'swiper-item-vbt',
  props: {
    direction: {
      default: () => 'vertical'
    },
    width: null,
    height: null
  },
  data: function () {
    return {
      swiper: null,
    }
  },
  computed:{
    itemStyle () {
      let res = {}
      if(this.width) {
        res.width = this.width
      }

      if(this.height) {
        res.height = this.height
      }
      return res
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
      
    })
  },
  methods: {
    getParent () {
      if(this.$parent.$options.name==='swiper-wrapper-vbt') {
        return this.$parent
      } else if(this.$parent.$parent.$options.name==='swiper-wrapper-vbt') {
        return this.$parent.$parent
      } else {
        return {
          goToNext: tempFunc,
          goToPre: tempFunc
        }
      }
    },
    initScroll () {
      this.swiper = new Swiper(this.$refs.el, {
        direction: this.direction,
        slidesPerView: 'auto',
        freeMode: true,
        nested: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
        on: {
          touchEnd: () => {
            return;
            const maxTranslate = this.swiper.maxTranslate()
            console.log('maxTranslate', maxTranslate, this.swiper.translate)
            if(this.swiper.translate===0) return;
            if(maxTranslate>=0) {
              /*
              if(this.swiper.translate<=0) {
                this.getParent().goToNext()
              }else {
                this.getParent().goToPre()
              }*/
            } else {
              if(this.swiper.translate < maxTranslate) {
                this.getParent().goToNext()
              }else if(this.swiper.translate > 0) {
                this.getParent().goToPre()
              }
            }
          }
        }
      });
    },

    onEnter () {
      this.swiper.slideTo(0)
      this.$emit('on-enter')
    },

    beforeEnter () {
      this.$emit('before-enter')
    },

    update () {
      this.swiper && this.swiper.update()
    }
  },
}
</script>