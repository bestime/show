<style lang="stylus" rel="stylesheet/stylus">
.as54etw7a8sd
  font-size 0.39rem
  height 2.5rem
  padding-bottom 10px
  .swiper-slide
    width 2rem
    display flex
    align-items center
    justify-content center
    flex-direction column
    img
      width 1rem
      height 1rem
      border none
      background #f9f9f9
    span
      color #666
      margin-top 0.4rem
  .swiper-scrollbar
    background none
  .swiper-scrollbar-drag
    background rgba(0,0,0,0.2)

</style>

<template>
  <div ref="wrapper" class="swiper-container as54etw7a8sd">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img/>
        <span>奖品名字</span>
      </div>
      <div class="swiper-slide">
        <img/>
        <span>奖品名字</span>
      </div>
      <div class="swiper-slide">
        <img/>
        <span>奖品名字</span>
      </div>
      <div class="swiper-slide">
        <img/>
        <span>奖品名字</span>
      </div>
      <div class="swiper-slide">
        <img/>
        <span>奖品名字</span>
      </div>
      <div class="swiper-slide">
        <img/>
        <span>奖品名字</span>
      </div>
    </div>
    <div ref="scbar" class="swiper-scrollbar"></div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$nextTick(() => {
      this.swiper = new Swiper(this.$refs.wrapper, {
        slidesPerView: 'auto',
        spaceBetween: 10,
       
        scrollbar: {
            el: this.$refs.scbar,
          },

      });
    })
  }
}
</script>