import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

var resultComps=[];
let files  = require.context('./components',false,/\.vue$/);
files.keys().forEach(fileName =>{
	var name  = fileName.replace(/^\.\//,'');
    // console.log(name);
	name  = name.replace(/\.vue$/,'');
	resultComps.push({
		path:'/' + name.toLowerCase(),
		name:name.toLowerCase(),
		component:function(){
			return import('./components/' + name)
		}
	})
})

export default new Router({
	mode:'history',
	routes:resultComps
})