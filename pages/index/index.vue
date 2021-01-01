<template>
	<view class="home">
		<!-- 轮播图开始 -->
		<swiper indicator-dots="true" interval="2000" circular="true" indicator-active-color="#fff" autoplay="true">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img_Url"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图结束 -->
		
		<!-- 导航开始 -->
		<view class="nav">
			<view class="nav_item" v-for="item in navs" :key="item.path" @click="navItem(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 导航结束 -->
		
		<!-- 推荐商品开始 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<goods-list :goods="goods"></goods-list>
		</view>
		<!-- 推荐商品结束 -->
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: "iconfont icon-ziyuan",
						title: "九霄超市",
						path: "/pages/goods/goods"
					},
					{
						icon: "iconfont icon-guanyuwomen",
						title: "联系我们",
						path: "/pages/contact/contact"
					},
					{
						icon: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/pics/pics"
					},
					{
						icon: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/videos/videos"
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: "/api/lunbo.json"
				})
				this.swipers = res.data
				
				/*
				注意:在方法前添加 async 和在调用封装的网络请求方法后添加 await 是为了实现
				异步方法的同步化.发送网络请求的方法属于异步方法,如果不添加这两个关键字实现
				异步方法的同步化,可能会出现页面渲染时数据还未请求的情况
				*/
			},
			// 获取热门商品信息
			async getHotGoods() {
				const res = await this.$myRequest({
					url: "/api/recommend.json"
				})
				this.goods = res.data
			},
			// 导航跳转事件
			navItem(options) {
				uni.navigateTo({
					url: options
				})
			}
		},
		components: {
			"goods-list": goodsList
		}
	}
</script>

<style lang="scss">
	/* 轮播图样式 */
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
	
	/* 导航样式 */
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			.icon-tupian{
				font-size: 45rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
	
	/* 推荐商品样式 */
	.home .hot_goods{
		background-color: #eee;
		margin-top: 10px;
		overflow: hidden;
		.title{
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 40rpx;
			color: #b50e03;
			background-color: #fff;
			letter-spacing: 20px;
			margin: 7rpx 0;
		}
	}
</style>
