<template>
	
	<div class="pin">
		
	
		<div class="header">
			<div class="react">品味</div>
		</div>
		<div class="content">
			<dl>
				<dt><img src="../../static/imgs/pw_008.png"/></dt>
				<dd>
					<span>Yeelight充电感应夜灯正式上线</span>
					<span><a href="javascript:;">随性而动，因你而亮</a></span>
				</dd>
			</dl>
			<dl>
				<dt><img src="../../static/imgs/pw_008.png"/></dt>
				<dd>
					<span>Yeelight充电感应夜灯正式上线</span>
					<span><a href="javascript:;">随性而动，因你而亮</a></span>
				</dd>
			</dl>
			<dl>
				<dt><img src="../../static/imgs/pw_008.png"/></dt>
				<dd>
					<span>Yeelight充电感应夜灯正式上线</span>
					<span><a href="javascript:;">随性而动，因你而亮</a></span>
				</dd>
			</dl>
		</div>
		<div class="footer">
			<ul>
				<router-link to="/news">首页</router-link>
				<router-link to="/type">分类</router-link>
				<router-link to="/pinwei">品味</router-link>
				<router-link to="/gouwuche">购物车</router-link>
				<router-link to="/my">个人</router-link>
	
			</ul>
	
		</div>
	</div>
</template>

<script>
	export default {
		name: "pin",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.pin{
		width: 100%;
		height: auto;
		display: flex;
    	flex-direction: column;
	}
	.pin .header {
		width: 100%;
		height: 0.8rem;
		position: fixed;
		left: 0;
		top: 0;
	}
	.pin .header .react{
		background-color:rgb(239,239,240);
		line-height: 0.8rem;
		text-align: center;
		font-size: 0.24rem;
		font-weight: bold;
		color: #323232;
	}
	.pin .content{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0.81rem;
		bottom: 0.96rem;
		overflow: auto;
	}
	.pin .content dl{
		width: 100%;
		height: 4.62rem;
		border-width: 0.01rem 0 0 ;
		border-style: solid;
		border-color: rgb(191,191,192);
	}
	.pin .content dl dt{
		width: 100%;
	}
	.pin .content dl dt img{
		width: 100%;
		height: auto;
	}
	.pin .content dl dd{
		width: 100%;
		height: 1.04rem;
		margin-top:0.27rem ;
	}
	.pin .content dl dd span{
		display: block;
		line-height: 0.43rem;
		text-align: center;
		font-size: 0.22rem;
		color: #2d2d2d;
		font-weight: bold;
	}
	.pin .content dl dd span a{
		font-size: 0.2rem;
		color: #909090;
	}
	.pin .footer {
		width: 100%;
		height: 0.96rem;
		background: #fafafa;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	
	.pin .footer a {
		display: inline-block;
		width: 20%;
		float: left;
		font-size: 0.18rem;
		line-height: 0.96rem;
		justify-content: space-around;
		text-align: center;
		color: #9d815b ;
	}
</style>