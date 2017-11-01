<template>
	<div id="header" class="head-content head1" :class="{'head1':flag,'head2':flag}">
		<div class="content-box">
			<img :src="imgSrc" />
			<nav class="fr">
				<ul class="text-right">
					<router-link v-for="(item,index) in navTitle" tag="li" :to="item.name" :key="item.name" v-on:click.native='productHead(index)'>{{item.title}}</router-link>
					<li>
						<el-button type="primary" size="small" @click="openDetail('http://cars.insbaby.com/login')">&nbsp;&nbsp;登 录&nbsp;&nbsp;</el-button>
					</li>
					<li>
						<el-button size="small" @click="openDetail('http://cars.insbaby.com/register')">&nbsp;&nbsp;注 册&nbsp;&nbsp;</el-button>
					</li>
				</ul>
			</nav>
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
					title: "主页"
				}, {
					name: "product",
					title: "产品介绍"
				}, {
					name: "partners",
					title: "合作加盟"
				}, {
					name: "aboutus",
					title: "关于我们"
				}],
				flag:true,/*是否是产品介绍路由，是：true，否：false*/
				imgSrc:""
			}
		},
		created(){
			this.flag = this.flagDefault();
			this.imgSrc = this.flag?require('./img/logo2.png'):require('./img/logo.png');
		},
		methods:{
			/*判断路由是产品时,设置falg=true*/
			productHead(index){
				if(index == 1){
					this.flag = true;
				}else{
					this.flag = false;
				}
				this.imgSrc = this.flag ?require('./img/logo2.png'):require('./img/logo.png');
			},
			/*是否是产品介绍路由，是：true，否：false*/
			flagDefault(){
				return (this.$route.path == "/product" ? true : false);
			},
			/*跳转页面*/
			openDetail(url){
				location.href = url;
			}
		}
	}
</script>

<style lang="less" scoped>

	/*@import "../../static/common.less";*/
	#header{
		position: fixed;
		top: 0;
		z-index: 1000000;
	}
	@color: #00AEFF;
	.text-right{
		text-align: right;
	}
	.head1{
		background-color: #fff;
		border-bottom: 1px solid #E6E6E6;
	}
	.head2{
		position: absolute;
		background-color: rgba(0,0,0,0.3);
		color: #FFFFFF;
		border-bottom: 0;
	}
	.head-content {
		width: 100%;
	}
	
	img {
		vertical-align: middle;
	}
	
	.content-box {
		width: 960px;
		height: 72px;
		line-height: 72px;
		margin: 0 auto;
		box-sizing: content-box;
	}
	
	nav {
		width: 70%;
		height: 100%;
	}
	
	li {
		display: inline-block;
		padding: 0 20px;
		cursor: pointer;
	}
	
	.router-link-active {
		border-bottom: 2px solid @color;
		color: @color;
	}
	
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
</style>