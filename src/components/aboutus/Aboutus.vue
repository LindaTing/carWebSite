<template>
	<div id="aboutus" class="content">
		<section>
			<div class="mainCon">
				<header>
					<el-row>
						<el-col :span="9" class="text-center">
							<div class="line"></div>
						</el-col>
						<el-col :span="6" class="text-center">
							<h1>车险管家介绍</h1>
						</el-col>
						<el-col :span="9" class="text-center">
							<div class="line"></div>
						</el-col>
					</el-row>
				</header>
				<div class="">
					<ul class="con-list">
						<li>
							<header class="title2">关于我们</header>
							<p>“车险管家”项目成立于2017年，是一家专注于车险Saas的服务平台，本款软件为保险软件系统，是面向机动车保险公司、代理渠道、终端零售商以及代理人设计的车险系统，通过使用该系统可以在业务拓展、业务管理、账目管理实现全面自动化。</p>
						</li>
						<li>
							<header class="title2">团队介绍</header>
							<p>“车险管家”成立于2017年，是一家专注于车险Saas服务平台的公司，团队核心成员拥有8年以上保险、商旅和互联网行业经验，优势互补。一群善良、勤奋、专业和有梦想的人，共同创造一个伟大的保险梦。</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="bg-FA">
			<div class="mainCon">
				<header>
					<el-row>
						<el-col :span="9" class="text-center">
							<div class="line"></div>
						</el-col>
						<el-col :span="6" class="text-center">
							<h1>联系我们</h1>
						</el-col>
						<el-col :span="9" class="text-center">
							<div class="line"></div>
						</el-col>
					</el-row>
				</header>
				<div class="">
					<ul class="con-list">
						<li>
							<img src="./img/address.png"/>
							<span>办公地址：上海市宝山区呼兰西路123号4号楼</span>
						</li>
						<li>
							<img src="./img/phone.png"/>
							<span>联系电话：021-51995517</span>
						</li>
						<li>
							<img src="./img/MAIL.png"/>
							<span>邮箱地址：liubin.zhang@insbaby.com</span>
						</li>
						<li class="map">
							<img src="./img/map.png"/>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "Aboutus",
		computed: {
			setHeight: function() {
				return window.innerHeight - 72;
			}
		},
		medthods: {

		}

	}
</script>

<style scoped="scoped">
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
	.content{
		padding-top: 72px;
	}
	.line{
		/*width: 100%;*/
		height:1px;
		background-color: #E6E6E6;
		margin: 105px 20px 85px;
	}
	header h1{
			text-align: center;
			font-size: 26px;
			color: #333333;
			margin: 88px 0 48px;
		}
	.mainCon{
		width: 960px;
		margin: 0 auto;
	}
	.bg-FA{
		background-color: #FAFAFA;
	}
	.title2{
		font-size: 16px;
		color: #333333;
	}
	.title2:before{
		display: inline-block;
		width: 2px;
		height: 50px;
		background-color: #3FBBF2;
		content: "";
		height: 16px;
		vertical-align: bottom;
		margin-right: 10px;
	}
	.con-list li{
		margin-bottom: 16px;
	}
	.con-list p{
		text-indent: 28px;
		color: #333333;
		font-size: 14px;
		margin: 20px 0 88px;
		font-family: "宋体";
		line-height: 24px;
	}
	.con-list span{
		color: #666;
		font-size: 14px;
	}
	.map img{
		width: 100%;
		margin: 78px 0 92px;
	}
</style> 