<template>
	<div>
		<div>
			<img src="imurl">
		</div>
		<div>
			<div>
				<h3></h3>
				<p></p>
			<div>		
			<span>
				<span></span>
			</span>
		</div>
	</div>
	<div>
		<el-button>
			<my-input-number></my-input-number>
		</el-button>
	</div>
</div>
</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.one-commodity{
  height: $OneCommodityWrapHeight;
  width: 100%;
  font-size: 0;
  border-bottom: 1px solid #e4e7ed;
  background-color: #fff;
}
.one-commodity>div{
  font-size: $GobalFontSize;
  display: inline-block;
  vertical-align: middle;
}
.left{
  width: 40%;
  height: 100%;
}
.left>img{
  height: 80%;
  transform: translateY(10%);
}
.right{
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 60%;
  text-align: left;
  padding-left: 10px;
  .text{
    position: absolute;
    line-height: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .title{

  }
  .price {

    .price-number{
      color: #ff65af;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .cart-btn{
    position: absolute;
    bottom: 5px;
    right: 10px;
    .el-button--danger{
      background-color: #ff65af;
      border-color: #ff65af;
    }
  }

}

@media screen and (min-width: 600px) {
  .one-commodity{
    height: $OneCommodityWrapHeight600;
  }
}
@media screen and (min-width: 800px) {
  .one-commodity{
    height: $OneCommodityWrapHeight800;
  }
}
  @media screen and (min-width: 1025px) {
  .one-commodity{
    height: $OneCommodityWrapHeight1025;
  }
}
</style>