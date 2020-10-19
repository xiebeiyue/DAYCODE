<template>
<nav class="app-nav">
<router-link to="/home"><div class="nav-item" @click="changeNavImg"><div class="homeImg" :class="homeImgOn"></div></div></router-link>
<router-link to="/cart"> <div class="nav-item" @click="changeNavImg">
	<div class="cartImg" :class="cartImgOn"></div></div></router-link>
		<router-link to="/profile"><div class="nav-item" @click="changeNavImg">
			<div class="profileImg" :class="profileImgOn"></div></div></router-link>
		</nav>
	</template>
	<script>
		export default{
			name:"Nav"
		}

	</script>
	<style>
	.app-nav{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		font-size: 0;
		border-top: 1px solid #eee;
		background-color: #fff;
		height: 60px;
		z-index: 999;
	}
	a{
		text-decoration: none;
		text-align: center;
	}
	.nav-item{
		height: 100%;
		display: inline-block;
		width: 33.33%;
		text-align: center;
		float: left;
	}
	.nav-item>div{
		display: inline-block;
		width: 45px;
		height: 45px;
		margin-top: 10px;
	}
	.homeImg{
		background-image: url('../assets/icon/home.png');
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 135px 45px;
	}
	.homeImgOn{
		background-position: 100% 100%;
	}
	.cartImg{
		background-image: url('../assets/icon/cart.png');
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 135px 45px;
	}
	.cartImgOn{
		background-position: 100% 100%;
	}
	.profileImg{
		background-image: url('../assets/icon/profile.png');
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 135px 45px;
	}
	.profileImgOn{
		background-position: 100% 100%;
	}

</style>