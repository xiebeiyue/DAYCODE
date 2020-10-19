<template>
	<div>
		<p>{{  title }}</p>
		<button @click="changeTitle">{{  msg }}</button>
	</div>
</template>
<script>
	export default{
		name:'Hello',
		data(){
			return{
				title:"这是另外一个子组件",
				msg:"点击就传值"
			}
		},
		methods:{
			changeTitle(){
				this.$emit("titleChanged","子组件向父组件传值之后")
			}
		}
	}
</script>