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
		GoodsCurrentSelKind:0

	},
	mutations:{
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

