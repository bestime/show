<style lang="stylus" rel="stylesheet/stylus">
$leftNavWidth = 200px
.left-nav-wrapper
	position:fixed
	width:$leftNavWidth
	left:0
	top:0
	bottom:0
	z-index:1
	background:#444
	transition:0.2s
.main-content-wrapper
	height:2000px
	background:#f2f2f2
.toggle-nav
	position:absolute
	left:20px
	top:20px
	background:#dd4215
	z-index:20
.l-nav-name
	color:#a9a9a9
	text-align:center
	line-height:40px
	cursor:pointer
	border-bottom:#5d5d5d solid 1px
.catList
	background:#fff
	position:absolute
	left:100%
	top:5px
	width:200px
	margin-left:5px
	box-shadow:5px 5px 10px rgba(0,0,0,0.1)
.nav-s-pt
	border-top:#f2f2f2 solid 1px
	padding:10px 20px
	cursor: pointer
	font-size:14px
	color:#666
	&:hover
		background:#f9f9f9
.catList
	.nav-s-pt:nth-of-type(1)
		border-top:none


</style>

<template>
	<div class="home-wrapper">
		
		<div class="left-nav-wrapper">
			<NavTree :list="HomeList"></NavTree>   
		</div>
		<div class="main-content-wrapper">
			<router-view></router-view>
			<div v-for="(a, index) in 50" :key="index">{{a}}</div>
		</div>
	</div>
</template>

<script>
import { HomeList } from '@/router.js'
import NavTree from './NavTree.vue'
export default {
	components: {
		NavTree
	},
	data () {
		return {
			HomeList,
			currentCat: {}
		}
	},

	methods: {
		selectNav (item) {
			this.currentCat = item
		}
	},
}



</script>