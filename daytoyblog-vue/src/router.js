import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

var resultComps  = [];

let requireComponent  = require.context('./components',true,/\.vue$/);

requireComponent.keys().forEach(fileName => {
	var name  = fileName.replace(/^\.\//,'');
	name = name.replace(/\.vue$/,'')
	console.log(name);
	resultComps.push({
		path:'/'+name.toLowerCase(),
		name:name.toLowerCase(),
		component:function(){
			return import('./components/'+name)
		}
	})
	console.log(resultComps);
})
export default new Router({
	mode:'history',
	routes:resultComps
})