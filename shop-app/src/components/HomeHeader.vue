<template>
	<header class="home-header">
		<h4 class="top-text">月上快达</h4>
		<div class="tap-menu">
		<el-tabs :tab-position="'top'" type="border-card" style="height: 39px;" v-model="goodsType" @tab-click="changeGoodsType">
        <el-tab-pane label="全部" name="全部"></el-tab-pane>
        <el-tab-pane label="水果" name="水果"></el-tab-pane>
        <el-tab-pane label="蔬菜" name="蔬菜"></el-tab-pane>
        <el-tab-pane label="肉蛋" name="肉蛋"></el-tab-pane>
        <el-tab-pane label="速冻" name="速冻"></el-tab-pane>
        <el-tab-pane label="酒饮" name="酒饮"></el-tab-pane>
        <el-tab-pane label="乳品" name="乳品"></el-tab-pane>
        <el-tab-pane label="零食" name="零食"></el-tab-pane>
      </el-tabs>
		</div>
	</header>
</template>
<script>
	export default{
		name:"HomeHeader",
		data(){
			return{
				kindToType: new Map([
					['全部',0],
					['水果',0],
					['蔬菜',0],
					['肉蛋',0],
					['速冻',0],
					['酒饮',0],
					['乳品',0],
					['零食',0]
				]),
			goodsType:'全部'
			}
		},
		methods:{
			changeGoodsType(){
				this.$store.state.GoodCurrenSelKind  = this.kindToType.get(this.goods)
			},
		},
	}
</script>
<style>
	.home-header{
		position: fixed;
		left:0;
		top:0;
		width: 100%;
		background-color: #fff;
	}
	.top-text{
		height: 35px;
		line-height: 35px;
	}
</style>