<style lang="stylus" rel="stylesheet/stylus">
.s12e-12
  position absolute
  left 300px
  top 300px
  border:red solid 1px
  width 300px
</style>

<template>
  <div class="select-eg">
    <div class="s12e-12">
      <div style="height:400px;"></div>
      <select-vbt v-model="val_01"/>
      <div style="height:800px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val_01: ''
    }
  },
  mounted(){    
    
  },

  methods: {
    
  }
}
</script>