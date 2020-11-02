import Vue from 'vue';
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		username:'',
		isLogin:false,
		address:[
			{
				name:'小月亮',
				phone:123456789,
				city:'三亚',
				detailAdd:'三亚荣誉酒店三楼234号'
			},
			{
				name:'小月亮',
				phone:123456789,
				city:'三亚',
				detailAdd:'三亚荣誉酒店三楼234号'
			},
			{
				name:'小月亮',
				phone:123456789,
				city:'三亚',
				detailAdd:'三亚荣誉酒店三楼234号'
			}
		],
		cartGoods:[],
		cartCounter:0,
		GoodsCurrentSelKind:0,

	},
	mutations:{
		addGoodsToCart(state,item){
			item.isInCart = true;
			item.count++;
			state.cartGoods.push(item);
			state.cartCounter++;
		},
		deleteGoodsFromCart(state,itemId){
			state.cartCounter--;
			state.cartGoods.some((val,index,Goods)=>{
				if(val.id === itemId){
					val.isInCart = false;
					val.count--;
					Goods.splice(index,1);
					return true;
				}
			})

		},
		addGoods(state,itemId){
			state.cartCounter++;
			state.cartGoods.some(val=>{
				if(val.id === itemId){
					val.count++
					return true;
				}
			})
		},
		login(state,username){
			state.username = username;
			state.isLogin = true;
		},
		logout(state){
			state.isLogin = false;
		},
		changeCurrentSelKind(state,kind){
			state.GoodsCurrentSelKind = kind;
		}
	}
})

