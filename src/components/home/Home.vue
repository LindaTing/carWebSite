<template>
	<div id="home" style="margin-top: 72px;">
		<section  :style="{backgroundImage: 'url(' + bg + ')',height:setHeight+'px'}">
			<div class="btnBox">
				<el-button class="btn1" type="primary" @click="openDetail('http://cars.insbaby.com/login')"> 开始使用 </el-button>
				<router-link class="btn1" tag="el-button" to="/product">了解更多   </router-link>
			</div>
		</section>
		<section>
			<div >
				<header>
					<el-row>
						<el-col :span="8" class="text-center">
							<div class="line"></div>
						</el-col>
						<el-col :span="8" class="text-center">
							<h1>我们为客户解决什么问题？</h1>
						</el-col>
						<el-col :span="8" class="text-center">
							<div class="line"></div>
						</el-col>
					</el-row>
				</header>
				<div class="mainCon">
					<el-row :gutter="20">
						<el-col :span="8">
							<div class="grid-content col-content">
								<img src="./img/renewal.png" />
								<h3 class="title2">续保查询</h3>
								<p class="con">通过车牌号快速查询行驶本信息、去年投保险种</p>
								<router-link tag="el-button" class="el-button--primary btn2" to="/product#son1"> 查看详情  </router-link>
							</div>
						</el-col>
						<el-col :span="8">
							<div class="grid-content col-content">
								<img src="./img/quote.png" />
								<h3 class="title2">自动报价</h3>
								<p class="con">输入车牌号，10秒钟快速报价，成功率高达98%以上</p>
								<router-link tag="el-button" class="el-button--primary btn2" to="/product#son2"> 查看详情  </router-link>
							</div>
						</el-col>
						<el-col :span="8">
							<div class="grid-content col-content">
								<img src="./img/order.png" />
								<h3 class="title2">订单管理</h3>
								<p class="con">保留全流程记录，对使用者管理，查询订单方便快捷</p>
								<router-link tag="el-button" class="el-button--primary btn2" to="/product#son3"> 查看详情  </router-link>
							</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="8">
							<div class="grid-content col-content">
								<img src="./img/amount.png" />
								<h3 class="title2">资金账单</h3>
								<p class="con">自动生成与保险公司以及下级代理人的对张账单</p>
								<router-link tag="el-button" class="el-button--primary btn2" to="/product#son4"> 查看详情  </router-link>
							</div>
						</el-col>
						<el-col :span="8">
							<div class="grid-content col-content">
								<img src="./img/CRM.png" />
								<h3 class="title2">车主CRM</h3>
								<p class="con">自动生成本地车主数据库，到期自动提醒、自动报价</p>
								<router-link tag="el-button" class="el-button--primary btn2" to="/product#son5"> 查看详情  </router-link>
							</div>
						</el-col>
						<el-col :span="8">
							<div class="grid-content col-content">
								<img src="./img/api.png" />
								<h3 class="title2">API接口</h3>
								<p class="con">可以按照需求来特殊定制用户前端界面与后台管理界面</p>
								<router-link tag="el-button" class="el-button--primary btn2" to="/product#son6"> 查看详情  </router-link>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
		</section>
		<section>
			<div>
				<header>
					<el-row>
						<el-col :span="8" class="text-center">
							<div class="line"></div>
						</el-col>
						<el-col :span="8" class="text-center">
							<h1>车险管家移动客户端功能特点介绍</h1>
						</el-col>
						<el-col :span="8" class="text-center">
							<div class="line"></div>
						</el-col>
					</el-row>
				</header>
				<div class="mainCon">
					<img src="./img/banner3.png" />
					<ul class="con-list">
						<li>批量导入基盘客户，初始化客户信息，进店老客户进店甄选，提升续保转化率</li>
						<li>车险到期后会自动提醒业务员，紧急消息（进店通知）弹窗提醒，不紧急消息（普通到期）列表提醒</li>
						<li>财务人员根据车牌号调取保单信息，结合代理人、直客、外方网店费率，自动生成与净费代理人和外方网点的对账单</li>
					</ul>
			</div>
	</div>
	</section>
	<section>
		<div>
			<header>
				<el-row>
					<el-col :span="8" class="text-center">
						<div class="line"></div>
					</el-col>
					<el-col :span="8" class="text-center">
						<h1>保马良车PC功能特点介绍</h1>
					</el-col>
					<el-col :span="8" class="text-center">
						<div class="line"></div>
					</el-col>
				</el-row>
			</header>
			<div class="mainCon">
				<img src="./img/banner4.png" />
				<ul class="con-list con-list2">
					<li>根据车牌号获取行驶证信息成功率95%</li>
					<li>根据车牌号获取上年投保信息成功率85%</li>
					<li>支持按车架号（VIN码）、发动机号续保、适合新车、过户车</li>
				</ul>
				<router-link tag="el-button" class="btn-more" to="/product"> 查看更多  </router-link>
			</div>
		</div>
	</section>
	</div>
</template>

<script>
	export default {
		name: "Home",
		data(){
			return{
				bg:require("./img/banner1.png")
			};
		},
		computed: {
			setHeight: function() {
				return window.innerHeight - 72;
			}
		},
		methods: {
			openDetail(url){
				location.href = url;
			}
		}
	}
	
	
	$(function(){

//	if($.browser.msie && $.browser.version < 10){
//
//		$('body').addClass('ltie10');
//
//	}

//	$.fn.fullpage({
//
//		verticalCentered: false,
//
//		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
//
//		navigation: true,
//
//		navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验']
//
//	});

});
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
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.mainCon {
		/*max-width: 1000px;*/
		width: 960px;
		margin: 0 auto;
		text-align: center;
	}
	
	.btnBox {
		text-align: right;
		margin-right: 55%;
		margin-top: 35%;
	}
	button.btn1{
		width: 144px;
		height: 34px;
	}
	button.btn2{
		width: 120px;
		height: 30px;
		line-height: 10px;
	}
	section {
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
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
		margin: 88px 0;
	}
	
	.line {
		/*width: 100%;*/
		height: 1px;
		background-color: #E6E6E6;
		margin: 105px 20px;
	}
	/*第二部分开始*/
	
	.col-content:hover {
		border: 1px solid #408FFF;
	}
	
	.col-content {
		border: 1px solid #E5E5E5;
		padding: 30px;
	}
	
	.col-content img {
		height: 34px;
	}
	
	.title2 {
		font-size: 18px;
		margin-bottom: 10px;
		margin-top: 10px;
		font-weight: bold;
		color: #666;
	}
	
	.con {
		text-align: left;
		text-indent: 28px;
		font-size: 14px;
		line-height: 22px;
		color: #666666;
		margin-bottom: 28px;
	}
	/*第二部分结束*/
	/*第三部分开始*/
	
	.con-list {
		margin-top: 10px;
	}
	
	.con-list li {
		list-style: disc;
		text-align: left;
		font-size: 16px;
		color: #666666;
		line-height: 28px;
	}
	/*第三部分结束*/
	/*第四部分开始*/
	
	.con-list2 {
		width: 50%;
		margin: 20px auto;
	}
	.btn-more{
		width: 198px;
		height: 42px;
		color: #20A0FF;
   		border: 1px solid #20a0ff;
   		margin: 20px 0 48px 0;
	}
	/*第四部分结束*/
</style>