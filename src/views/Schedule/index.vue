<template>
	<!-- 课程表 -->
	<div class="schedule">
		<div class="harder">
			<span @click="switchCycleButton" style="position: absolute;">
				<div>{{cycle}}</div>
				<i class="xiala"></i>
				<ul class="switchCycle" v-if="shouSwitchCycle">
					<li v-for="(item,i) in cycles" :key="i">
						<span @click.stop="switchCycle(item.value,item.name)">{{item.name}}</span>
					</li>
				</ul>
			</span>
		</div>
		<table border="1" cellspacing="0" cellpadding="0" style="width:100%;">
			<tr>
				<th>&nbsp;</th>
				<th>星期一</th>
				<th>星期二</th>
				<th>星期三</th>
				<th>星期四</th>
				<th>星期五</th>
				<th>星期六</th>
				<th>星期日</th>
			</tr>
			<tr>
				<td>1</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>2</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>3</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>4</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>5</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>6</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>7</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>8</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>9</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>10</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
		</table>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { request } from '@/utils/api.ts'
@Component({
	components: {}
})
export default class schedule extends Vue {
	public cycle: string = '第一周'
	public cycleValue:number=1
	public shouSwitchCycle:boolean=false
	public cycles: any = [
		{ name: '第一周', value: 1 },
		{ name: '第二周', value: 2 },
		{ name: '第三周', value: 3 },
		{ name: '第四周', value: 4 },
		{ name: '第五周', value: 5 },
		{ name: '第六周', value: 6 },
		{ name: '第七周', value: 7 },
		{ name: '第八周', value: 8 },
		{ name: '第九周', value: 9 },
		{ name: '第十周', value: 10 },
		{ name: '第十一周', value: 11 },
		{ name: '第十二周', value: 12 },
		{ name: '第十三周', value: 13 },
		{ name: '第十四周', value: 14 },
		{ name: '第十五周', value: 15 },
		{ name: '第十六周', value: 16 },
		{ name: '第十七周', value: 17 },
		{ name: '第十八周', value: 18 },
		{ name: '第十九周', value: 19 },
		{ name: '第二十周', value: 20 }
	]

	switchCycle(value: any, name: any) {
		console.log('1212121') 
		
		this.cycle = name
		this.cycleValue=value
		this.shouSwitchCycle=false
		this.getTypeData()
	}
	switchCycleButton(){
		this.shouSwitchCycle=!this.shouSwitchCycle
	}
  getTypeData() {
		request({
			method:'GET',
			url:'/schedule/searchAll',
			data:{cycle:this.cycleValue}
		})

	}

	
}
</script>
<style lang="scss" scoped>
.harder {
	width: 100%;
	height: 60px;
	background-color: #2879d8;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px 15px 0 0;
}
tr {
	border: 0.5px solid #808080;
	height: 60px;
}
th {
	border: 0.5px solid #808080;
}
td {
	border: 0.5px solid #808080;
}
.xiala {
	right: -20px;
	position: absolute;
	top: 50%;
	border-top: 5px transparent dashed;
	border-left: 5px solid #000;
	border-right: 5px transparent dashed;
	border-bottom: 5px transparent dashed;
	display: inline-block;
	-webkit-transition: -webkit-transform 0.6s ease;
	-moz-transition: -moz-transform 0.6s ease;
	-o-transition: -o-transform 0.6s ease;
	-ms-transition: -ms-transform 0.6s ease;
	transform-origin: 4px 3px;
	-webkit-transform: translate(0, -50%);
	-moz-transform: translate(0, -50%);
	-ms-transform: translate(0, -50%);
	-o-transform: translate(0, -50%);
	transform: translate(0, -50%);
	transform: rotate(90deg);
}
.switchCycle {
	background-color: #ffffff;
	position: absolute;
	width: 80px;
	text-align: left;
	height: 80px;
	overflow: auto;
	padding: 10px;
	border: 1px solid #8f8f8f;
	border-radius: 3px;
	box-shadow: -6px 6px 20px #888888;
	margin-left: 20px;
	li {
		list-style: none;
	}
}
</style>