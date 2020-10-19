<template>
	<div>
		<!-- 副组件向子组件传值 -->
		<h1>父组件向子组件传值</h1>
		<p>这是父组件</p>
		<Users v-bind:shop="shops"></Users>
		<Hello v-on:titleChanged="updateTitle"></Hello>
		<p>{{ title }}</p>
	</div>
</template>
<script>
	import Users from "./component/Users"
	import Hello from "./component/Hello"
	export default{
		name:'Demo',
		components:{
			Users,
			Hello
		},
		data(){
			return{
				shops:["one","two","three"],
				title:"还没传值之前"
			}
		},
		methods:{
			updateTitle(e){
				this.title = e;
			}
		}


	}
</script>