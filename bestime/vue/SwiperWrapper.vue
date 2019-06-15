<style lang="stylus" rel="stylesheet/stylus">
.vbt-swiper-full-wrapper
  .swiper-container
    width: 100%
    height: 100%

</style>

<template>
  <div class="test-wrapper vbt-swiper-full-wrapper">
    <div ref="el" class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper-wrapper-vbt',
  props: {
  // 子组件层级深度，默认1，如果子组件套在另外的组件内部，需要加上tier
    tier: {
      type: Number,
      default: 1
    }
  },
  data(){
    return {
      moving: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  methods: {
    initSwiper () {
      this.swiper = new Swiper(this.$refs.el, {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          slideChangeTransitionStart: () => {
            this.moving = true
            const vChild = this.getOneChild()
            if(vChild) {
              vChild.beforeEnter()
            }
          },
          slideChangeTransitionEnd: () => {
            this.moving = false
            const vChild = this.getOneChild()
            if(vChild) {
              vChild.onEnter()
            }
          }
        }
      });
    },

    getOneChild () {
      let index = 0
      let vmChildren = []
      if(this.tier===1) {
        vmChildren = this.$children
      }else if(this.tier===2) {
        this.$children.forEach(item => {
          item.$children && item.$children.forEach(c => {
            vmChildren.push(c)
          })
        })
      }      

      for(let a=0; a<vmChildren.length; a++) {
        let vChild = vmChildren[a]
        if(vChild.$options.name==='swiper-item-vbt') {
          if(this.swiper.activeIndex===index++) {
            return vChild
          }
        }
      }
    },

    goToPre: function () {
      if(this.swiper && !this.moving) {
        this.swiper.slidePrev()
      }
    },

    goToNext: function () {
      if(this.swiper && !this.moving) {
        this.swiper.slideNext()
      }
    }
  }
}
</script>
