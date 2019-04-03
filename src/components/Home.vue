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
.main-content-wrapper
	margin-left: $leftNavWidth
	height:2000px
	background:#f2f2f2
.l-nav-name
	color:#a9a9a9
	text-align:center
	line-height:40px
	cursor:pointer
	border-bottom:#5d5d5d solid 1px
</style>

<template>
	<div class="home-wrapper">
		<div class="left-nav-wrapper">
			<div class="l-nav-name" v-for="(item, index) in HomeList" :key="index">{{ item.label }}</div>
		</div>
		<div class="main-content-wrapper">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { HomeList } from '@/router.js'
export default {
	data () {
		return {
			HomeList
		}
	}
}



</script>