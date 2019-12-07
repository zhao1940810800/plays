<template>
	<div class="Nav">
		<li class="nav-style" v-for="(item,i) in nav" :key="i">
			<div @click="router(item.url)" :class="{'is-active':isActive(item.url)}">
				<div class="icon"><i class="iconfont" :class="item.icon"></i></div>
				{{item.name}}</div>
		</li>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component
export default class nav extends Vue {
	public nav = [
		{ url: 'broadcast', name: '直播' ,icon:'icon-zhibo'},
		{ url: 'Schedule', name: '课程表' ,icon:'icon-thin-_book_writi'},
		{ url: 'dialogue', name: '附近' ,icon:'icon-huihua'},
		{ url: 'job', name: '兼职' ,icon:'icon-qian_'},
		{ url: 'group', name: '社团',icon:'icon-shehuituanti' }
	]

router(url:any){
	this.$router.push(url)
}
isActive(url:any){
	return this.$route.path.indexOf(url)!=-1
}
}
</script>
<style scoped lang="scss">
.is-active{
	color: #00ff00;
	font-size: 18px;	
}
.Nav{
	display: flex;
	justify-content: space-between;
	height: 80px;
	align-items: center;
	position: fixed;
	right: 0;
	left: 0;
	bottom: 0;
	border-top: 1px solid #000;
	background-color: #fff;
}
li{
	list-style: none;
}
.iconfont{
	font-size: 25px;
}
</style>
