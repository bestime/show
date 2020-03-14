<style lang="stylus" rel="stylesheet/stylus">
.home-wrapper
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  background #424054
  margin 0
  padding  0
  overflow hidden
  
  #particle-slider
    position absolute
    left 0
    top 0
    right 0
    bottom 0
  .to-enter
    position absolute
    z-index 5
    left 0
    right 0
    top 20px
    overflow hidden
    display flex
    align-items center
    justify-content center
    
</style>

<template>
  <div class="home-wrapper">
    <div id="particle-slider">
      <div class="slides">
        <div id="first-slide" class="slide" data-src="">
        </div>
      </div>
      <canvas class="draw"></canvas>
    </div>
    <div class="to-enter">
      <Skill type="html"/>
      <Skill type="css"/>
      <Skill type="js"/>
      <Skill type="vue"/>
      <Skill type="nodejs"/>
      <Skill type="react"/>
      <Skill type="flutter"/>
      <Skill type="ps"/>
    </div>
  </div>

</template>

<script>




import Skill from './Skill'
import imgData from '../js/img-data'
export default {
  components: {
    Skill
  },

  data () {
    return {
      
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },

  methods: {
    init () {
      var isMobile = navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
      var isSmall = window.innerWidth < 1000;
      
      var ps = new ParticleSlider(imgData, {
        ptlGap: isMobile || isSmall ? 3 : 0,
        ptlSize: isMobile || isSmall ? 3 : 1,
        width: 1e9,
        height: 1e9
      });    
      
      
      (window.addEventListener
      ? window.addEventListener('click', function(){ps.init(true)}, false)
      : window.onclick = function(){ps.init(true)});
    }
  }
}
</script>
