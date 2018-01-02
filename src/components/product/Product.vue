<template>
	<div id="product" style="margin-top: 72px;">
		<!--第一部分-->
		<section class="section1" :style="{backgroundImage: 'url(' + bg + ')',height:setHeight+'px'}">
			<div class="">
				<div class="conBody">
					<el-row class="text-center">
						<el-col class="leftBox" :span="15" :style="{lineHeight:setHeight+'px'}">
							<img src="./img/1-1.png" />
						</el-col>
						<el-col class="rightBox" :span="9">
							<h1 class="title-lg">续保管理  智能高效</h1>
							<h1 class="title-xs">车险报价 如此简单</h1>
							<h1 class="title-xs">报价、出单、对账一站式服务</h1>
							<el-button class="btn btnBig" @click="openDetail('https://car.insbaby.com/login')">&nbsp;&nbsp;立即使用&nbsp;&nbsp;</el-button>
							<el-row class="text-center marginT10">
								<el-col :span="10" :offset="2">
									<img src="./img/1-2.png" />
									<h5 class="text-label">微信公众号</h5>
								</el-col>
								<el-col :span="10">
									<img src="./img/1-2.png" />
									<h5 class="text-label">APP下载</h5>
								</el-col>
							</el-row>
						</el-col>
					</el-row>
				</div>
			</div>
		</section>
		<!--第二部分-->
		<section class="bg-FA">
			<div class="">
				<header>
					<el-row class="text-center">
						<el-col :span="24">
							<h1 class="title-ms">产品解决方案</h1>
						</el-col>
					</el-row>
				</header>
				<div class="conBody tab">
					<div class="content-box">
						<el-row class="text-center tabTitle">
							<div class="tabCell" v-for="(item,index) in tabTitle" :class="{active:item.isActive}" @click="setActive(item)">
								<h1 class="title">{{item.title}}</h1>
								<h5>{{item.name}}</h5>
							</div>
						</el-row>
						<ul class="text-center tabPanel">
							<li class="tabPanelCell text-center" name="application" :class="{active:tabTitle[0].isActive}">
								<el-row class="applicationCon">
									<el-col :span="15">
										<img src="./img/2-11.gif" />
									</el-col>
									<el-col :span="9">
										<h1 class="">打印报价单</h1>
									</el-col>
								</el-row>
							</li>
							<li class="tabPanelCell text-center" name="use" :class="{active:tabTitle[1].isActive}">
								<el-row class="text-center tabTitle">
									<el-col :span="11">
										<h1 class="title-xs">使用前</h1>
										<img src="./img/2-22.png" />
										<ul class="text-left textCon">
											<li>1、使用前续保占有市场率为31.8%；</li>
											<li>1、使用前续保占有市场率为31.8%；</li>
											<li>1、使用前续保占有市场率为31.8%；</li>
										</ul>
									</el-col>
									<el-col :span="11" :offset="2">
										<h1 class="title-xs">使用后</h1>
										<img src="./img/2-21.png" />
										<ul class="text-left textCon">
											<li>1、使用前续保占有市场率为31.8%；</li>
											<li>1、使用前续保占有市场率为31.8%；</li>
											<li>1、使用前续保占有市场率为31.8%；</li>
										</ul>
									</el-col>
								</el-row>
							</li>
							<li class="tabPanelCell text-center" name="resource" :class="{active:tabTitle[2].isActive}">
								<el-row>
									<el-col class="resourceLeft" :span="9" :offset="2">
										<img src="./img/2-32.png" />
										<p class="text-left">多地市保险公司帐号<br>多保险公司车险报价<br>同一保险公司不同地区政策<br>本地区的外地车辆资源<br>车辆历史轨迹</p>
									</el-col>
									<el-col class="resourceRight" :span="9" :offset="1">
										<img src="./img/2-31.png" />
										<p class="text-right">打通帐号体系，共享车险出单<br>多保险公司同时报价<br>外地车险资源共享<br>车辆理赔、违章、年限等信息入库共享</p>
									</el-col>
								</el-row>
							</li>
							<li class="tabPanelCell text-center" name="customer" :class="{active:tabTitle[3].isActive}">
								<el-row>
									<el-col class="leftBox" :span="8">
										<img src="./img/2-32.png" />
									</el-col>
									<el-col class="rightBox" :span="16">
										<!--<img src="./img/2-31.png" />-->
										<h1>logo</h1>
										<p class="text-left">文案说明 文案说明文案说明 文案说明文案说明 文案说明文案说明 文案说明文案说明 文案说明文案说明 文案说明文案说明 文案说明文案说明 文案说明</p>
									</el-col>
								</el-row>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!--第三部分-->
		<section class="section3 bg-0C1A37" :style="{height:setHeight2+'px'}">
			<div>
				<header>
					<el-row class="text-center">
						<el-col :span="24">
							<h1 class="title-ms">我们的优势</h1>
						</el-col>
					</el-row>
				</header>
				<div class="conBody">
					<div class="content-box">
						<el-row class="text-center">
							<el-col class="cell" :span="12">
								<div class="cellLeft">
									<div class="circle">
										
									</div>
								</div>
								<div class="cellRight text-left">
									<h1>傻瓜操作／FOOL OPERATION</h1>
									<p>车牌号一键报价、续保、出单，人力配置无要求，业务员随时可操作完成</p>
								</div>
							</el-col>
							<el-col class="cell" :span="12">
								<div class="cellLeft">
									<div class="circle">
										
									</div>
								</div>
								<div class="cellRight text-left">
									<h1>智能管理／INTELLIGENT MANAGEMENT</h1>
									<p>车辆信息、保单信息云端存储，最高等级加密管理，随时调阅历史数据，到期自动提醒续保，无需人脑记忆</p>
								</div>
							</el-col>
						</el-row>
						<el-row class="text-center">
							<el-col class="cell" :span="12">
								<div class="cellLeft">
									<div class="circle">
										
									</div>
								</div>
								<div class="cellRight text-left">
									<h1>资源共享／RESOURCE SHARING</h1>
									<p>解决车险跨地区销售难题，多保险公司、多政策、跨区域交互共享，再也不用担心外地业务不能做</p>
								</div>
							</el-col>
							<el-col class="cell" :span="12">
								<div class="cellLeft">
									<div class="circle">
										
									</div>
								</div>
								<div class="cellRight text-left">
									<h1>强大运维／POWERFUL OPERATION</h1>
									<p>专业技术团队强势运维管理，系统稳定流畅，问题急速响应，解决后顾之忧</p>
								</div>
							</el-col>
						</el-row>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "product",
		data() {
			return {
				bg: require("./img/bg.png"),
				tabTitle: [{
						title: "应用场景",
						name: "APPLICATION SCENE",
						value: "application",
						isActive: true
					},
					{
						title: "使用对比",
						name: "USE CONTRAST",
						value: "use",
						isActive: false
					},
					{
						title: "资源共享",
						name: "RESOURCE SHARING",
						value: "resource",
						isActive: false
					},
					{
						title: "客户案例",
						name: "CUSTOMER CASE",
						value: "customer",
						isActive: false
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
				this.tabTitle.forEach(function(index) {
					index.isActive = false;
				})
				item.isActive = true;
			}
		}
	}
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
	.text-right {
		text-align: right;
	}
	
	.bg-FA {
		background-color: #FAFAFA;
	}
	
	.bg-0C1A37 {
		background-color: #0C1A37;
	}
	
	.marginT10 {
		margin-top: 20%;
	}
	/*base.css结束*/
	
	section {
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		/*overflow: hidden;*/
	}
	/*第一部分开始*/
	
	.section1 {
		color: #FFFFFF;
		padding: 0 8%;
		box-sizing: border-box;
	}
	
	.section1 .leftBox img {
		width: 95%;
		vertical-align: middle;
	}
	
	.section1 .rightBox {
		margin-top: 10%;
	}
	
	.title-lg {
		font-size: 52px;
		margin-bottom: 8%;
	}
	
	.title-xs {
		font-size: 24px;
		margin-bottom: 2%;
	}
	
	.title-ms {
		font-size: 32px;
		margin-top: 3%;
		margin-bottom: 3%;
	}
	
	.btn.btnBig {
		width: 148px;
		height: 42px;
		margin-top: 10%;
	}
	
	.text-label {
		margin-top: 20px;
		font-size: 18px;
	}
	/*第一部分结束*/
	/*第二部分开始*/
	
	.tab {
		background-color: #FFFFFF;
		padding: 30px;
	}
	
	.tab .tabTitle {
		cursor: pointer;
	}
	
	.tab .tabCell {
		width: 25%;
		float: left;
		color: #666666;
	}
	
	.tab .tabCell:hover {
		color: #404040;
	}
	
	.tab .tabCell.active {
		color: #404040;
		border-bottom: 2px solid #3295fa;
	}
	
	.tab .tabCell h1 {
		font-size: 24px;
		margin-bottom: 16px;
	}
	
	.tab .tabCell h5 {
		font-size: 14px;
		margin-bottom: 10px;
	}
	
	.tabPanel .tabPanelCell.active {
		display: block;
	}
	
	.tabPanelCell {
		display: none;
		padding-top: 55px;
	}
	
	.tabPanelCell .title-xs {
		margin-bottom: 24px;
	}
	
	.tabPanelCell[name=application]>div {
		padding: 20px;
		width: 100%;
		border-radius: 5px;
		background-color: #161B26;
		color: #FFFFFF;
	}
	
	.tabPanelCell[name=application]>div img {
		width: 100%;
	}
	.tabPanelCell[name=use]{
		padding-bottom: 5.3%;
	}
	
	.tabPanelCell[name=use] img {
		width: 100%;
	}
	
	.tabPanelCell[name=use] .textCon {
		font-size: 18px;
		line-height: 44px;
		margin-top: 20px;
	}
	.tabPanelCell[name=resource] {
		padding-bottom: 5.3%;
	}
	.tabPanelCell[name=resource] img {
		width: 100%;
	}
	.tabPanelCell[name=resource] .resourceLeft,.tabPanelCell[name=resource] .resourceRight{
		position: relative;
	}
	.tabPanelCell[name=resource] .resourceLeft p,.tabPanelCell[name=resource] .resourceRight p{
		padding: 5px 38px;
		position: absolute;
		bottom: 15%;
		font-size: 24px;
		line-height: 44px;
	}
	.tabPanelCell[name=customer]{
		padding-bottom: 5.3%;
	}
	.tabPanelCell[name=customer]>div {
		border: solid 1px #bfbfbf;
	}
	.tabPanelCell[name=customer] .leftBox img{
		width: 100%;
	}
	.tabPanelCell[name=customer] .rightBox{
		padding: 20px 40px;
	}
	.tabPanelCell[name=customer] .rightBox p{
		font-size: 24px;
		line-height: 44px;
		color: #404040;
	}
	/*第二部分结束*/
	/*第三部分开始*/
	.section3{
		color: #FFFFFF;
	}
	.section3 .cell{ 
		display: -moz-box;
		display: -webkit-box;
		display: -ms-box;
		display: -o-box;
		display: box;
		padding-top:50px ;
		/*height: 270px;*/
	}
	.section3 .cell .cellLeft{
		width: 128px;
	}
	.section3 .cell .cellLeft .circle{
		width: 128px;
		height: 128px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.5);
	}
	.section3 .cell .cellRight{
		padding-left: 30px;
		padding-right:200px;
		-moz-box-align: center;
		-webkit-box-align: center;
	}
	.section3 .cell .cellRight h1{
		font-size: 24px;
		margin-bottom: 10px;
	}
	.section3 .cell .cellRight p{
		font-size: 18px;
		line-height: 44px;
	}
	/*第三部分结束*/
	/*第四部分开始*/
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