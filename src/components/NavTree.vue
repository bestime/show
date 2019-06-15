<style lang="stylus" rel="stylesheet/stylus">
.nav-tree-item
	.lev-father
		color #666
		margin-top:10px		
		> .item-name			
			padding-left 20px
	.lev-child
		color:#989898
		.item-name
			padding-left 30px			
		&:hover
			background #dedede				
	.item-wrapper
		font-size:14px
		cursor:pointer
		line-height 40px
		position relative		
		&.active
			background #dedede
			color #4e4e4e
			&:after
				position absolute
				content: ''
				left 0
				top 0
				bottom 0
				width 4px
				background #4e4e4e
				z-index 10

</style>

<template>
	<div class="nav-tree-item">
		<div class="item-wrapper" :class="levClassName(item)" v-for="(item, index) in list" :key="index">
			<div class="item-name" @click="goTo(item)">{{item.label}}</div>
			<NavTree v-if="item.children" :list="item.children" isChild></NavTree>
		</div>
	</div>
  
</template>

<script>
import { hasProp } from '@bestime/vue/vue-tool.js'
import { mapGetters } from 'vuex'
export default {
	name: 'NavTree',	
	props: {
		list: {
			type:Array,
			default: []
		},
		isChild: null,
	},
	computed: {		
		...mapGetters([
			'currentRouteName'
		])
	},
	data () {
		return {
			
		}
	},

	methods: {
		goTo (item) {
			this.$router.push({ name: item.name })
			console.log(item)
		},

		levClassName (item) {
			return [
				hasProp(this.isChild) ? 'lev-child' : 'lev-father',
				this.currentRouteName===item.name ? 'active' : ''
			]
		},
	},
}
</script>