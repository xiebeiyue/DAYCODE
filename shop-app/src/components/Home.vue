<template>
	<div class="home">
		<HomeHeader></HomeHeader>
		<div class="home-main">
		<transition-group enter-active-class="slideInRight">
        <ul class="goods animated" :key="animatedCurrentKey">
          <li v-for="item in goods" :key="item.index" class="one-com" v-show="isCurrent(item.kind)">
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
		</div>
	</div>
</template>
<script>
	import HomeHeader from './HomeHeader'
	import OneCommodity from './HomeOneCommodity'
	export default{
		name:'Home',
		data(){
			return{
				goods:[]
			}
		},
		computed:{
			animatedCurrentKey(){
				return this.$store.state.GoodsCurrentSelKind;
			}
		},
		methods:{
			isCurrent (itemKind){
				let currentKind = this.$store.state.GoodsCurrentSelKind;
				if(currentKind === 0) {
					return true;
				}else{
					return itemKind === currentKind;
				}
			},
		},
		components:{
			HomeHeader,
			OneCommodity,

		},
		mounted (){
			this.axios.get('../js/goods.json')
			.then(res => {
				this.goods = [...res.data];
				console.log(res.data)
			})
			.catch(() =>{
				this.axios.get('../js/github-goods.json')
				.then(res => {
					this.goods = [...res.data];
				})
			})
		}
	}
	
</script>
<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home{
  width: 100%;
  padding-bottom: $NavHeight + 5px;
  padding-top: $HomeHeaderHeight;
}
.home-main{
  width: 100%;
  overflow-x: hidden;
}
.goods{
  width: 100%;
  list-style: none;
  padding: 0;
}
.goods>li{
  width: 100%;
}
.no-more-goods{
  height: 40px;
  line-height: 40px;
}
.slideInRight{
  animation-duration: 0.25s;
}
</style>