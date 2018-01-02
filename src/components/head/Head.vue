<template>
	<div id="header" class="head-content">
		<div class="content-box">
			<el-row>
				<el-col :span="4">
					<img :src="imgSrc" />
				</el-col>
				<el-col :span="20" class="text-right">
					<nav class="text-right fr">
						<ul class="text-right">
							<router-link v-for="(item,index) in navTitle" tag="li" :to="item.name" :key="item.name">{{item.title}}</router-link>
							<li>
								<el-button class="btn" size="small" @click="openDetail('https://car.insbaby.com/login')">&nbsp;&nbsp;登 录&nbsp;&nbsp;</el-button>
							</li>
							<li>
								<el-button class="btn plain" size="small" @click="openDetail('https://car.insbaby.com/register')">&nbsp;&nbsp;注 册&nbsp;&nbsp;</el-button>
							</li>
						</ul>
					</nav>
				</el-col>
			</el-row>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'head',
		data() {
			return {
				/*导航路径和名称*/
				navTitle: [{
					name: "home",
					title: "首页"
				}, {
					name: "product",
					title: "产品与方案"
				}, {
					name: "function",
					title: "功能介绍"
				}, {
					name: "partners",
					title: "合作加盟"
				}, {
					name: "aboutus",
					title: "关于我们"
				}],
				imgSrc: ""
			}
		},
		created() {
			this.imgSrc = require('./img/logo2.png');
		},
		methods: {
			/*跳转页面*/
			openDetail(url) {
				location.href = url;
			}
		}
	}
</script>

<style lang="less" scoped>
	/*base.css开始*/
	*{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
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
	
	#header {
		position: fixed;
		top: 0;
		z-index: 1000000;
	}
	
	@color: #f4fdff;
	.text-right {
		text-align: right;
	}
	
	.head-content {
		width: 100%;
		background-color: #0c1a37;
		border-bottom: 1px solid #525F73;
		color: @color;
	}
	
	img {
		vertical-align: middle;
	}
	
	.content-box {
		height: 72px;
		line-height: 72px;
		margin: 0 auto;
	}
	
	li {
		display: inline-block;
		padding: 0 20px;
		cursor: pointer;
	}
	
	.router-link-active {
		border-bottom: 2px solid @color;
		font-weight: bold;
		color: @color;
	}
	
	.btn {
		width: 88px;
	}
	
	.btn.plain {
		background: transparent;
		border: 1px solid @color;
		color: @color;
	}
	/*响应式窗口大小*/
	
	@media only screen and (min-width: 1200px) {
		.content-box {
			width: 1170px;
		}
	}
	
	@media only screen and (min-width: 992px) and (max-width: 1200px) {
		.content-box {
			width: 970px;
		}
	}
	
	@media only screen and (max-width: 970px) {
		.content-box {
			/*width: 970px;*/
			min-width: 875px;
			margin: 0 20px;
		}
		.btn {
			width: auto;
		}
	}
</style>