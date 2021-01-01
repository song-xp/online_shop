<template>
	<view class="news_detail">
		<view class="title">{{title}}</view>
		<view class="content">{{content}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				content: "",
				index: 0
			}
		},
		onLoad(option) {
			this.index = option.index
			this.getNewsContent()
		},
		methods: {
			async getNewsContent() {
					const res = await this.$myRequest({
						url: "/api/message.json"
					})
					this.title = res.data[this.index].title
					this.content = res.data[this.index].news_detail
			}
		}
	}
</script>

<style lang="scss">
	.news_detail{
		padding: 30rpx;
		.title{
			margin-bottom: 20rpx;
			text-indent: 2em;
			font-weight: bold;
			font-size: 40rpx;
		}
		.content{
			text-indent: 2em;
			letter-spacing: 5rpx;
			line-height: 55rpx;
		}
	}
</style>
