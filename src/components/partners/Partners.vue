<template>
	<div id="partners">
		<div class="banner">
			<img src="./img/banner.png" />
		</div>
		<div>
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
			<el-row class="mainCon">
				<el-col :span="8" class="text-center">
					<img class="company" src="./img/taibao.png" />
				</el-col>
				<el-col :span="8" class="text-center">
					<img class="company" src="./img/pingan.png" />
				</el-col>
				<el-col :span="8" class="text-center">
					<img class="company" src="./img/renbao.png" />
				</el-col>
				<el-col :span="8" class="text-center">
					<img class="company" src="./img/guoshoucai.png" />
				</el-col>
				<el-col :span="8" class="text-center">
					<img class="company" src="./img/anxin.png" />
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
	/*base.css开始*/
	
	body,
	p,
	input,
	textarea,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	ol,
	dl,
	ul,
	li,
	dd,
	dt {
		font-weight: normal;
		padding: 0px;
		padding-top: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		padding-right: 0px;
		margin: 0px;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
		margin-right: 0px;
		list-style: none;
	}
	
	img {
		border: 0;
	}
	
	a {
		text-decoration: none;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	/*base.css结束*/
	
	.text-center {
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
	header{
		margin: 0 auto;
	}
	@media only screen and (min-width: 1200px){
		header {
			width: 1170px;
		}
	}
	@media only screen and (min-width: 992px ) and (max-width: 1200px){
		header {
			width: 970px;
		}
	}
	@media only screen and (max-width: 970px) {
		header {
			min-width: 875px;
		}
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
	
	.company {
		width: 256;
		height: 148px;
		margin: 0 auto 68px;
		border: 1px solid #CCCCCC;
		cursor: pointer;
	}
	
	.company:hover {
		border: 1px solid #00AEFF;
	}
</style>