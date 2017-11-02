<template>
	<div id="product">
		<div class="page" :style="{backgroundImage: 'url(' + bg + ')'}"></div>
		<nav>
			<!---->
			<!--<router-link v-for="(item,index) in navSonTitle" tag="li" :to="item.name" :key="item.name">{{item.title}}</router-link>-->
			<a v-for="(item,index) in navSonTitle"  :href="'#'+item.name" :class="{active:item.activeFlag}" @click="setActive(item)">{{item.title}}</a>
		</nav>
		<section id="son1">
			<div>
				<el-row>
					<el-col :span="12">
						<img src="./img/renewal.png"/>
					</el-col>
					<el-col :span="12"  class="marginTop">
						<h3>续保查询</h3>
						<ul class="con-list">
							<li>车辆进店，SA扫车牌快速续保查询，到期车辆第一时间通知续保顾问</li>
							<li>APP车牌识别率近100%，有手机就能扫</li>
						</ul>
					</el-col>
				</el-row>
			</div>
		</section>
		<section id="son2" class="bg-gray">
			<div>
				<el-row>
					<el-col :span="12"  class="marginTop">
						<h3>自动报价</h3>
						<ul class="con-list">
							<li>只需一个车牌号，报价核保方便快捷</li>
							<li>支持短信发送报价的方式</li>
							<li>应用场景：代理人和车主报价（上图为代理人报价场景）</li>
						</ul>
					</el-col>
					<el-col :span="12" class="text-right">
						<img src="./img/quote.png"/>
					</el-col>
				</el-row>
			</div>
		</section>
		<section id="son3">
			<div class="paddingBottom">
				<el-row>
					<el-col :span="15" class="text-left" style="">
						<img style="height: 100%;" src="./img/order.png"/>
					</el-col>
					<el-col :span="9"  class="marginTop">
						<h3>订单管理	</h3>
						<ul class="con-list">
							<li>当车险到期后，会自动提醒业务员，紧急消息（进店通知）弹窗提醒，不紧急消息（普通到期）列表提醒</li>
						</ul>
					</el-col>
				</el-row>
			</div>
		</section>
		<section id="son4" class="bg-gray">
			<div class="paddingBottom">
				<el-row>
					<el-col :span="12"  class="marginTop">
						<h3>资金账单</h3>
						<ul class="con-list">
							<li>每张保单都要与保险公司结算佣金</li>
							<li>录入每个直客、每个代理人的净费数据</li>
							<li>定期与代理出单网点结算佣金</li>
						</ul>
					</el-col>
					<el-col :span="12" class="text-right">
						<img src="./img/amount.png"/>
					</el-col>
				</el-row>
			</div>
		</section>
		<section id="son5">
			<div class="paddingBottom">
				<el-row>
					<el-col :span="15">
						<img src="./img/CRM.png"/>
					</el-col>
					<el-col :span="9"  class="marginTop">
						<h3>车主CRM</h3>
						<ul class="con-list">
							<li>数据是核心竞争力</li>
							<li>基于CRM探索自动营销</li>
						</ul>
					</el-col>
				</el-row>
			</div>
		</section>
		<section id="son6" class="bg-gray">
			<div class="paddingBottom">
				<el-row>
					<el-col :span="12"  class="marginTop">
						<h3>API接口</h3>
						<ul class="con-list">
							<li>通过代理商直连保险公司核心系统</li>
							<li>我车型数据库，对接成本低</li>
							<li>统一标注化接口，一次对接，实现多家保险公司连接</li>
						</ul>
					</el-col>
					<el-col :span="12" class="text-right">
						<img src="./img/api.png"/>
					</el-col>
				</el-row>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "product",
		data() {
			return {
				navSonTitle: [{
						name: "son1",
						title: "续保查询",
						activeFlag:true
					}, {
						name: "son2",
						title: "自动报价",
						activeFlag:false
					}, {
						name: "son3",
						title: "订单管理",
						activeFlag:false
					}, {
						name: "son4",
						title: "资金账单",
						activeFlag:false
					},
					{
						name: "son5",
						title: "车主CRM",
						activeFlag:false
					}, {
						name: "son6",
						title: "API接口",
						activeFlag:false
					}
				],
				bg:require("./img/banner1.png")
			}
		},
		methods:{
			setActive(item){
				this.navSonTitle.forEach(function(index){
					index.activeFlag = false;
				})
				item.activeFlag = true;
			}
		}
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
	.text-center{
		text-align: center;
	}
	.text-right{
		text-align: right;
	}
	.page {
		width: 100%;
		height: 370px;
		/*background-image: url(img/banner1.png);*/
		background-position: center;
	}
	.bg-gray{
		background-color: #F2F2F2;
	}
	nav {
		width: 100%;
		background-color: #F2F2F2;
		height: 60px;
		line-height: 60px;
		text-align: center;
		a {
			display: inline-block;
			padding: 0 30px;
			cursor: pointer;
			color: #333;
			font-size: 16px;
		}
	}
	
	.active {
		font-weight: bold;
		border-bottom: 2px solid #3DAEFE;
	}
	
	.con-list{
		margin-top: 10px;
	}
	.con-list li{
		list-style: disc;
		text-align: left;
		font-size: 18px;
		color: #666666;
		line-height: 28px;
	}
	section>div{
		width: 780px;
		margin: 0 auto;
		padding-top: 70px;
	}
	section h3{
		font-size: 30px;
		color: #333333;
	}
	.marginTop{
		margin-top: 8%;
	}
	.paddingBottom{
		padding-bottom: 70px;
	}
</style>