<template>
	<div class="home">
		<HomeHeader></HomeHeader>
		<!-- <div class="home-main">
		<transition-group enter-active-class="slideInRight">
        <ul class="goods animated" :key="animatedCurrentKey">
          <li v-for="item in goods" class="one-com" v-show="isCurrent(item.kind)">
            <one-commodity
              :itemId="item.id"
              :imgUrl="item.img"
              :title="item.title"
              :content="item.content"
              :price="item.price"
              :count="0"
             ></one-commodity>
          </li>
        </ul>
        <div :key="'0' + animatedCurrentKey">
          <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
        </div>
      </transition-group>
		</div> -->
	</div>
</template>
<script>
	import HomeHeader from './HomeHeader'
	export default{
		name:'Home',
		// data(){
		// 	return{
		// 		goods:[]
		// 	}
		// },
		// computed:{
		// 	animatedCurrentKey(){
		// 		return this.$store.state.GoodsCurrentSelKind;
		// 	}
		// },
		// methods:{
		// 	isCurrent (itemKind){
		// 		let currentKind = this.$store.state.GoodsCurrentSelKind;
		// 		if(currentKind === 0) {
		// 			return true;
		// 		}else{
		// 			return itemKind === currentKind;
		// 		}
		// 	},
		// },
		components:{
			HomeHeader
		}
		// mounted () {
		// 	let that  = this
		// 	that.axios.get('/shop-app/static/data/github-goods.json')
		// 	.then(res => {
		// 		that.goods = [...res.data];
		// 	})
		// 	console.log(this.data)
		// 	.catch(() => {
		// 		that.axios.get('http://127.0.0.1:7777/static/data/goods.json')
		// 		.then(res => {
		// 			that.goods  = [...res.data];
		// 		})
		// 	})
		// }
	}
	
</script>
<style>
	.home{
		width: 100%;
		padding-bottom:65px;
		padding-top: 80px;
	}
	.home-main{
		width: 100%;
		overflow-x: hidden;
	}
	.goods{
		width: 100%;
		list-style-type: none;
		padding:0;
	}
	.goods>li{
		width: 100%;
	}
	.no-more-goods{
		height: 40px;
		line-height: 40px;
	}
	.slideInRight{
		animation-duration:0.25s;
	}
</style>