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
    <div style="padding:20px;">
      <select-vbt v-model="val_01" v-if="show01"/>
    </div>
    <div class="s12e-12">
      <div style="height:400px;"></div>
      <div>
        <select-vbt deleteItem v-model="val_01" v-if="show01">开关</select-vbt>       
        <button-vbt @click="show01=!show01">{{ show01 ? '移除' : '显示' }}</button-vbt>
      </div>
      <div>
        <select-vbt v-model="val_02" v-if="show02"/>
        <button-vbt @click="show02=!show02">{{ show02 ? '移除' : '显示' }}</button-vbt>
      </div>
      <div style="height:800px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val_01: '',
      val_02: '',
      show01: true,
      show02: true
    }
  },
  mounted(){    
    
  },

  

  methods: {
    
  }
}
</script>