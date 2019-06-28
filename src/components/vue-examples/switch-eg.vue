<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div>
    <switch-vbt v-model="eg0" type="bg-black">双向绑定</switch-vbt>

    <switch-vbt :value="open" @on-change="changeing">
      <span>这是开关</span>
      <span style="color:red;">(切换显示加载动画)</span>
    </switch-vbt>
  </div>
</template>

<script>

export default {
  data () {
    return {
      open: false,
      eg0: true,
    }
  },
  
  mounted(){    
    
  },

  methods: {
    changeing (val, next) {
			setTimeout(() => {
				this.open = val
			}, 2000)
		},
  }
}
</script>