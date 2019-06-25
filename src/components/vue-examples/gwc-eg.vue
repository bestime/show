<style lang="stylus" rel="stylesheet/stylus">
.gwc-target
  width 40px
  height 40px
  background red
  line-height 40px
  text-align center
  color #fff
  cursor default
  
.s1w98989s
  background #f2f2f2
  position:absolute
  padding 20px
  cursor move
  box-shadow 0 0 10px rgba(0,0,0,0.3) 
  left 300px
  top 30% 
  display flex
  flex-direction column
  align-items center
  justify-content center  
  font-size 12px
.bdddutd5ton
  margin 0
  border none 
  padding 0
  background red
  color #fff
  padding 10px 20px
  font-size 16px
  position relative
  cursor pointer
  user-select none
.s1ig
  width 100px
.mmk-99
  display flex
  align-items center
  justify-content center
  padding 10px
.mm-from
  position absolute
  left 50%
  right 50%
  display block
  width 30px
  height 30px
  margin-left -15px
  margin-left -15px
</style>

<template>
  <div>
    <div class="mmk-99">
      <div class="bdddutd5ton" @click="doMove">
        <span>加入购物车</span>
        <span class="mm-from" ref="from"></span>
      </div>
    </div>
    <div ref="target" class="s1w98989s">
      <div style="color:#666;padding:10px;">拖动改变位置</div>
      <div ref="to" class="gwc-target">{{ num }}</div>
    </div>
    <img class="s1ig" ref="image" src="images/p01.png" style="display:none;"/>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      num: 0,
      doing: false
    }
  },

  mounted(){    
    this.$nextTick(() => {
      this.inidDragTarget()
    })
  },  

  methods: {
    inidDragTarget () {
      ns.drag({
        oHandle: this.$refs.target,
        oWrapper: this.$refs.target
      })
    },

    doMove () {
      if(this.doing) return;
      this.doing = true
      ns.Parabola({
        from: this.$refs.from,
        to: this.$refs.to,
        src: this.$refs.image.src,
        onEnd: () => {
          this.num++
          this.doing = false
        }
      })
    }
  }
}
</script>