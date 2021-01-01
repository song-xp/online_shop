<template>
	<view>
		<view class="contact">
			<image class="img" src="http://localhost:8086/online_shop_resource/api/images/gywmban.jpg"></image>
			<view class="info">
				<view @click="phoneCall">联系电话：132****3191</view>
				<view>校区地址：湖南省长沙市望城区旺旺中路8号湖南信息职业技术学院</view>
			</view>
			<map :longitude="longitude" :latitude="latitude" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 112.823848,
				latitude: 28.347241,
				markers: [
					{
						longitude: 112.823848,
						latitude: 28.347241,
						iconPath: "http://localhost:8086/online_shop_resource/api/images/map.png",
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			phoneCall() {
				uni.makePhoneCall({
					phoneNumber: '132****3191'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 60rpx;
			border-bottom: 1px solid #eee;
		}
	}
	map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
