<template>
	<div>
		<p>这是子组件</p>
		<ul>
			<li v-for="user in shop">{{  user }}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'Users',
		props:{
			shop:{
				type:Array,
				required:true
			}
		}
	}
</script>
<style>
	li{
		list-style-type: none;
	}
</style>