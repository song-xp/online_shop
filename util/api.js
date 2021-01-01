const BASE_URL = "http://localhost:8086/online_shop_resource"
export const myRequest = (options)=>{
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL+options.url,
			method: options.methods || 'GET',
			data: options.data || {},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				console.log("数据获取失败")
				reject(err)
			}
		})
	})
}