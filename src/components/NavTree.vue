<style lang="stylus" rel="stylesheet/stylus">
.nav-tree-item
	.item-wrapper
		margin-left:20px
		font-size:14px
		color:#fff
		cursor:pointer
</style>

<template>
	<div class="nav-tree-item">
		<div class="item-wrapper" v-for="(item, index) in list" :key="index">
			<div class="item-name" @click="goTo(item)">{{item.label}}</div>
			<NavTree v-if="item.children" :list="item.children"></NavTree>
		</div>
	</div>
  
</template>

<script>

export default {
	name: 'NavTree',
	props: {
		list: {
			type:Array,
			default: []
		}
	},
	data () {
		return {
			
		}
	},

	methods: {
		goTo (item) {
			this.$router.push({ name: item.name })
			console.log(item)
		}
	},
}
</script>