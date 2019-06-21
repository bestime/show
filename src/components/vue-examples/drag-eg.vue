<style lang="stylus" rel="stylesheet/stylus">
.drag-eg-wrapper
  width 100px
  height 100px
  background #000
  opacity:0.8
.drag-father
  width 500px
  height 300px
  background #eee
  margin 10px
  position relative
</style>

<template>
  <div ref="father" class="drag-father">
    <switch-vbt v-model="xianzhi" @on-change="change" style="margin:10px;">限制在本容器中拖动</switch-vbt>
    <div class="drag-eg-wrapper" id="drag-test01">
      <button ref="btn01">拖动我</button>
    </div>
    <div class="drag-eg-wrapper" id="drag-test02" style="left:330px;top:60px;background:red;">
      <button ref="btn02">拖动我</button>
    </div>
  </div>
</template>

<script>
import { drag } from '@bestime/js'
export default {
  data () {
    return {
      xianzhi: true
    }
  },
  mounted(){    
    this.$nextTick(() => {
      this.initDrag01()
      this.initDrag02()
    })
  },

  methods: {
    change (toVal) {
      this.drag01 && this.drag01.updateFahter(toVal ? this.$refs.father : null)

      this.drag02 && this.drag02.updateFahter(toVal ? this.$refs.father : null)
    },
    initDrag01 () {
      this.drag01 = drag({
        oWrapper: document.getElementById('drag-test01'),
        oHandle: this.$refs.btn01,
        oFather: this.xianzhi ? this.$refs.father : null
      })
    },
    initDrag02 () {
      this.drag02 = drag({
        oWrapper: document.getElementById('drag-test02'),
        oHandle: this.$refs.btn02,
        oFather: this.xianzhi ? this.$refs.father : null
      })
    }
  }
}
</script>