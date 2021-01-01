<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="i===index?'active':''" v-for="(item,index) in cates" :key="item.id" @click="changeCategory(index)">{{item.title}}</view>
		</scroll-view>
		
		<scroll-view class="right" scroll-y>
			<view v-if="flag">暂无数据</view>
			<view class="item" v-else v-for="(item,i) in contentCates" :key="item.img_url">
				<image :src="item.img_url"></image>
				<text>{{item.content}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				contentCates: [],
				tempContent: [],
				flag: false,
				i: 0
			}
		},
		onLoad() {
			this.getCategories()
		},
		methods: {
			// 获取社区图片分类数据
			async getCategories() {
				const res = await this.$myRequest({
					url: "/api/categories.json"
				})
				this.cates = res.data
				this.tempContent = this.cates.map(v => v.children)
				this.contentCates = this.tempContent[this.i]
				this.controlsContent()
			},
			// 控制社区内容的显示与隐藏
			controlsContent() {
				if(this.contentCates.length > 0){
					this.flag = false
				}else{
					this.flag = true
				}
			},
			// 切换社区分类数据
			changeCategory(index) {
				this.i = index
				this.contentCates = this.tempContent[index]
				this.controlsContent()
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			width: 520rpx;
			height: 100%;
			margin: 0 auto;
			.item{
				image{
					margin-top: 15rpx;
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 50rpx;
				}
			}
		}
	}
</style>
