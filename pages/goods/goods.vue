<template>
	<view class="goods_info">
		<goods-list :goods="goods"></goods-list>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	export default {
		data() {
			return {
				goods: []
			}
		},
		onLoad() {
			this.getGoodsInfo()
		},
		methods: {
			async getGoodsInfo() {
				const res = await this.$myRequest({
					url: "/api/goodslist.json"
				})
				this.goods = res.data
			}
		},
		onPullDownRefresh() {
			this.goods = []
			setTimeout(() => {
				this.getGoodsInfo()
				uni.stopPullDownRefresh()
			},1000)
		},
		components: {
			"goods-list": goodsList
		}
	}
</script>

<style lang="scss">
	.goods_info{
		background-color: #eee;
	}
</style>
