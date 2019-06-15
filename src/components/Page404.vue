<style lang="stylus" rel="stylesheet/stylus">
.page-404
  position:fixed
  left:0
  top:0
  right:0
  bottom:0
  display:flex
  align-items:center
  justify-content:center
  flex-direction: column
  font-size:16px
  color:#666
  background:#212121
</style>

<template>
	<div class="page-404">
		<Clock/>
    <div>404 Not Found</div>
	</div>
</template>

<script>
import Clock from './Clock'
export default {
  components: {
    Clock
  },
  mounted () {
    this.$nextTick(() => {
      
    })
  },

  methods: {
    
  }
}
</script>