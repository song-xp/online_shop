<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id">
			<image :src="item.img_Url"></image>
			<view class="price">
				<text>￥{{item.new_price}}</text>
				<text>￥{{item.old_price}}</text>
			</view>
			<view class="name">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods']
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item{
			background-color: #fff;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			width: 355rpx;
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
				padding-bottom: 10rpx;
			}
		}
		.price{
			color: $shop-color;
			font-size: 36rpx;
			text:nth-child(2){
				color: #ccc;
				font-size: 28rpx;
				margin-left: 15rpx;
				text-decoration: line-through;
			}
		}
		.name{
			font-size: 28rpx;
			line-height: 50rpx;
			padding-bottom: 15rpx;
			padding-top: 10rpx;
		}
	}
</style>
