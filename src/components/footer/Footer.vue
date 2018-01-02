<template>
	<div id="footer">
		<div class="content-box">
			@copyright 保贝保险 沪ICP备15029705号-3 沪公网安备31010702001254号
		</div>
	</div>
</template>

<script>
	export default {
		name: "footer",

	}
</script>

<style lang="less" scoped="scoped">
	/*base.css开始*/
	body,p,input,textarea,form,h1,h2,h3,h4,h5,h6,ol,dl,ul,li,dd,dt{font-weight:normal;padding:0px;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;margin:0px;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;list-style:none;}
	img{border:0;}
	a{text-decoration:none;}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	/*base.css结束*/
	@center: center;
	#footer {
		width: 100%;
		height: 106px;
		line-height: 106px;
		font-size: 12px;
		background-color: #0C1A37;
		border-top: 1px solid #3D485F;
	}
	
	.content-box {
		/*width: 1260px;*/
		color: #E6E6E6;
		text-align: @center;
	}
</style>