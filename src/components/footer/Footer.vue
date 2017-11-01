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
	@center: center;
	#footer {
		width: 100%;
		height: 106px;
		line-height: 106px;
		font-size: 12px;
		background-color: #1C262E;
	}
	
	.content-box {
		/*width: 1260px;*/
		color: #E6E6E6;
		text-align: @center;
	}
</style>