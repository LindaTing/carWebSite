<template>
	<div id="home" style="margin-top: 72px;">
		<!--第一部分-->
		<section :style="{backgroundImage: 'url(' + bg + ')',height:setHeight+'px'}">
			<div class="content-box">
				<header class="header1">
					<el-row class="text-center">
						<el-col :span="24">
							<h1 class="title-lg">续保管理 简单高效</h1>
						</el-col>
					</el-row>
					<el-row class="text-center">
						<el-col :span="24">
							<h1 class="title-xs">支持多家保险公司同时报价，省时、省力，省钱！</h1>
						</el-col>
					</el-row>
				</header>
				<div class="conBody">
					<el-row class="text-center">
						<el-col :span="8">
							<img src="./img/1-1.png" />
						</el-col>
						<el-col :span="8">
							<img src="./img/1-2.png" />
						</el-col>
						<el-col :span="8">
							<img src="./img/1-3.png" />
						</el-col>
					</el-row>
				</div>
				<footer>
					<el-row class="text-center">
						<el-col :span="24">
							<el-button class="btn btnBig" @click="openDetail('https://car.insbaby.com/login')">&nbsp;&nbsp;立即使用&nbsp;&nbsp;</el-button>
						</el-col>
					</el-row>
				</footer>
			</div>
		</section>
		<!--第二部分-->
		<section class="bg-FA" :style="{height:setHeight+'px'}">
			<div class="content-box">
				<header>
					<el-row class="text-center">
						<el-col :span="24">
							<h1 class="title-ms">我们能给你带来什么？</h1>
						</el-col>
					</el-row>
				</header>
				<div class="conBody">
					<ul class="accordion">
						<li class="accordion-cell text-center" :class="{active:item.isActive}" v-for="item in advantageData" @mouseenter="setActive(item)">
							<div class="accordion-default" v-bind:style="{display:(!item.isActive?'block':'none')}">
								<h5 class="num">{{item.num}}</h5>
								<h5 class="text-one">{{item.textOne}}</h5>
								<h5 class="text-two">{{item.textTwo}}</h5>
								<div class="">
									<img :src="item.iconImg"/>
								</div>
							</div>
							<div class="accordion-active" v-bind:style="{display:item.isActive?'block':'none'}">
								<div class="img-box">
									<img :src="item.img"/>
								</div>
								<h5 class="text-one">{{item.activeTextOne}}</h5>
								<h5 class="text-two">{{item.activeTextTwo}}</h5>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<!--第三部分-->
		<section class="section3" :style="{height:setHeight+'px'}">
			<div class="content-box">
				<header>
					<el-row class="text-center">
						<el-col :span="24">
							<h1 class="title-ms">我们能解决的问题不止于此！</h1>
						</el-col>
					</el-row>
				</header>
				<div class="conBody">
					<el-row class="text-center">
						<el-col :span="15">
							<img src="./img/3-1.png" />
						</el-col>
						<el-col :span="9">
							<dl class="text-left">
								<dt>还能解决问题一</dt>
								<dd>还能解决问题一还能解决问题一还能解决问题一还能解决问题一还能解决问题一还能解决问题一</dd>
							</dl>
							<dl class="text-left">
								<dt>还能解决问题一</dt>
								<dd>还能解决问题一还能解决问题一还能解决问题一还能解决问题一还能解决问题一还能解决问题一</dd>
							</dl>
							<dl class="text-left">
								<dt>还能解决问题一</dt>
								<dd>还能解决问题一还能解决问题一还能解决问题一还能解决问题一还能解决问题一还能解决问题一</dd>
							</dl>
						</el-col>
					</el-row>
				</div>
				<footer>
					<el-row class="text-center">
						<el-col :span="24">
							<el-button class="btn btnBig" type="primary" @click="openDetail('/productmore')">&nbsp;&nbsp;查看更多&nbsp;&nbsp;</el-button>
						</el-col>
					</el-row>
				</footer>
			</div>
		</section>
		<!--第四部分-->
		<section class="section4 bg-0C1A37" :style="{height:setHeight2+'px'}">
			<div class="content-box">
				<header class="header1">
					<el-row class="text-center">
						<el-col :span="24">
							<h1 class="title-ms">联系我们</h1>
						</el-col>
					</el-row>
				</header>
				<div class="conBody">
					<el-row>
						<el-col :span="10" :offset="2">
							<img src="./img/4-1.png" />
							<div class="describe">《保马良驹》微信公众号</div>
							<ul class="contact text-left">
								<li>办公地址：上海市宝山区呼兰西路123号4号楼</li>
								<li>联系电话：021-51995517</li>
								<li>邮箱地址：liubin.zhang@insbaby.com</li>
							</ul>
						</el-col>
						<el-col :span="10">
							<form>
								<el-row class="">
									<el-col :span="6"><label for="">客户姓名：</label></el-col>
									<el-col :span="18"><input type="text" name="" id="" value="" /></el-col>
								</el-row >
								<div class="">
									<el-col :span="6"><label for="">联系方式：</label></el-col>
									<el-col :span="18"><input type="text" name="" id="" value="" /></el-col>
								</div>
								<div class="">
									<el-col :span="6"><label for="">联系地址：</label></el-col>
									<el-col :span="18"><textarea rows="5" type="text" name="" id="" value="" /></el-col>
								</div>
								<div class="">
									<el-col :span="6">&nbsp;</el-col>
									<el-col :span="18"><el-button class="btn btnSubmit" type="primary" @click="openDetail('/productmore')">提交</el-button></el-col>
								</div>
							</form>
						</el-col>
					</el-row>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				bg: require("./img/banner1.png"),
				advantageData:[
					{
						num:"1",
						textOne:"QUOTE PRICE",
						textTwo:"进店自动报价",
						iconImg:require("./img/quoteIcon.png"),
						img:require("./img/quote.png"),
						activeTextOne:"系统自动对账",
						activeTextTwo:"车辆进入4S店铺、维修厂自动续保报价",
						isActive:true
					},
					{
						num:"2",
						textOne:"RECONCILIATION",
						textTwo:"共享资源",
						iconImg:require("./img/shareIcon.png"),
						img:require("./img/quote.png"),
						activeTextOne:"系统自动对账",
						activeTextTwo:"车辆进入4S店铺、维修厂自动续保报价",
						isActive:false
					},
					{
						num:"3",
						textOne:"OPPORTUNITY",
						textTwo:"面对面商机",
						iconImg:require("./img/nicheIcon.png"),
						img:require("./img/quote.png"),
						activeTextOne:"系统自动对账",
						activeTextTwo:"车辆进入4S店铺、维修厂自动续保报价",
						isActive:false
					},
					{
						num:"4",
						textOne:"RECONCILIATION",
						textTwo:"对账",
						iconImg:require("./img/reconciliationIcon.png"),
						img:require("./img/quote.png"),
						activeTextOne:"系统自动对账",
						activeTextTwo:"车辆进入4S店铺、维修厂自动续保报价",
						isActive:false
					}
				]
			};
		},
		computed: {
			setHeight: function() {
				return window.innerHeight - 72;
			},
			setHeight2: function() {
				return window.innerHeight - 72 - 106;
			}
		},
		methods: {
			openDetail(url) {
				location.href = url;
			},
			setActive(item) {
				this.advantageData.forEach(function(index) {
					index.isActive = false;
				})
				item.isActive = true;
			}
		}
	}

	$(function() {

	});
</script>

<style lang="less" scoped="scoped">
	/*base.css开始*/
	
	* {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
	
	.text-center {
		text-align: center;
	}
	
	.text-left {
		text-align: left;
	}
	
	.bg-FA {
		background-color: #FAFAFA;
	}
	
	.bg-0C1A37 {
		background-color: #0C1A37;
	}
	/*base.css结束*/
	
	section {
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		/*overflow: hidden;*/
	}
	
	header {
		color: #333333;
	}
	
	.header1 {
		color: #FFFFFF;
	}
	
	.title-lg {
		font-size: 78px;
		margin-top: 7.5%;
		margin-bottom: 3.5%;
	}
	
	.title-xs {
		font-size: 32px;
		margin-bottom: 5%;
	}
	
	.title-ms {
		font-size: 32px;
		margin-top: 8%;
		margin-bottom: 10%;
	}
	
	.btnBig {
		width: 148px;
		height: 42px;
		font-size: 18px;
		margin-top: 5%;
	}
	/*第二部分开始*/
	
	.accordion {
		width: 100%;
		height: 500px;
		border: solid 1px #ebebeb;
		background-color: #FFFFFF;
	}
	
	.accordion .accordion-cell {
		transition: all 0.5s;
		width: 21%;
		height: 100%;
		box-sizing: border-box;
		/*display: inline-block;*/
		float: left;
		border-right: solid 1px #ebebeb;
		padding: 5% 0;
	}
	
	.accordion .accordion-cell.active {
		width: 36%;
	}
	
	.accordion .accordion-cell:last-of-type {
		border: 0;
	}
	
	.accordion:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.accordion .accordion-default .num {
		font-size: 108px;
		color: #00acf4;
	}
	
	.accordion .accordion-default .text-one {
		font-size: 18px;
		color: #808080;
		margin-bottom: 30px;
	}
	
	.accordion .accordion-default .text-two {
		font-size: 24px;
		color: #404040;
		margin-bottom: 52px;
	}
	
	.accordion-cell.active {
		background-color: #FDFDFD;
	}
	
	.accordion .accordion-active .img-box {
		width: 60%;
		padding: 30px;
		margin: 0 auto;
		border: solid 1px rgba(0, 99, 255, 0.1);
		background-color: #FFFFFF;
	}
	
	.accordion .accordion-active .img-box img {
		width: 80%;
	}
	
	.accordion .accordion-active .text-one {
		font-size: 32px;
		color: #404040;
		margin-top: 40px;
		margin-bottom: 30px;
	}
	
	.accordion .accordion-active .text-two {
		font-size: 18px;
		color: #404040;
	}
	/*第二部分结束*/
	/*第三部分开始*/
	
	.section3 img {
		width: 80%;
	}
	
	.section3 dl {
		margin-bottom: 40px;
	}
	
	.section3 dt {
		font-size: 24px;
		line-height: 50px;
		color: #333333;
	}
	
	.section3 dd {
		height: 44px;
		font-size: 18px;
		line-height: 26px;
		color: #333333;
	}
	/*第三部分结束*/
	/*第四部分开始*/
	
	.section4 {
		color: #FFFFFF;
	}
	.section4 .describe{
		font-size: 18px;
		margin: 20px 0 60px 0;
	}
	.section4 .contact{
		font-size: 18px;
		line-height: 44px;
	}
	.section4 form{
		font-size: 18px;
	}
	.section4 form .el-col{
		height:42px;
		line-height: 42px;
		margin-bottom: 40px;
	}
	.section4 form input,.section4 form textarea{
		padding: 5px;
		box-sizing: border-box;
		resize: none;
		width: 100%;
	}
	.section4 form input{
		height: 42px;
	}
	.btnSubmit{
		width: 188px;
		height: 48px;
		border-radius: 0;
		font-size: 20px;
		margin-top: 40px;
	}
	/*第四部分结束*/
	/*响应式窗口大小*/
	
	.content-box {
		margin: 0 auto;
	}
	
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
			min-width: 875px;
			margin: 0 20px;
		}
	}
</style>