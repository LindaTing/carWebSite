<template>
	<div id="partners">
		<div class="banner">
			<img src="./img/banner.png" />
		</div>
		<div class="mainCon">
			<header>
				<el-row>
					<el-col :span="9" class="text-center">
						<div class="line"></div>
					</el-col>
					<el-col :span="6" class="text-center">
						<h1>合作商家</h1>
					</el-col>
					<el-col :span="9" class="text-center">
						<div class="line"></div>
					</el-col>
				</el-row>
			</header>
			<el-row>
				<el-col :span="8" class="text-center">
						<img class="company" src="./img/taibao.png"/>
				</el-col>
				<el-col :span="8" class="text-center">
						<img class="company" src="./img/pingan.png"/>
				</el-col>
				<el-col :span="8" class="text-center">
						<img class="company" src="./img/renbao.png"/>
				</el-col>
				<el-col :span="8" class="text-center">
						<img class="company" src="./img/guoshoucai.png"/>
				</el-col>
				<el-col :span="8" class="text-center">
						<img class="company" src="./img/anxin.png"/>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: "partners",

	}
</script>

<style scoped="scoped" lang="less">
.text-center{
	text-align: center;
}
	.banner {
		padding-top: 72px;
	}
	
	.banner img {
		width: 100%;
	}
	
	.line {
		/*width: 100%;*/
		height: 1px;
		background-color: #E6E6E6;
		margin: 105px 20px 85px;
	}
	
	header h1 {
		text-align: center;
		font-size: 26px;
		color: #333333;
		margin: 88px 0 48px;
	}
	
	.mainCon {
		width: 960px;
		margin: 0 auto;
	}
	.company{
		width: 256;
		height: 148px;
		margin: 0 auto 68px;
		border: 1px solid #CCCCCC;
		cursor: pointer;
	}
	.company:hover{
		border: 1px solid #00AEFF;
	}
</style>