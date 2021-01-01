<template>
	<view class="news">
		<view class="news_item" v-for="(item,index) in news" :key="item.id" @click="goDetail(index)">
			<image :src="item.img_Url"></image>
			<view class="content">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>发表时间：{{item.add_time}}</text>
					<text>浏览：{{item.count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: "/api/message.json"
				})
				this.news = res.data
			},
			goDetail(index) {
				uni.navigateTo({
					url: "../news_deatail/news_deatail?index=" + index
				})
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.content{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title{
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
