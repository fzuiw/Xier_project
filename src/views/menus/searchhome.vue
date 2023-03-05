<template>
  <div>
<van-tabs v-model="active">
  <van-tab title="搜索标题">
	<van-search v-model="searchValue" placeholder="请输入搜索标题" round></van-search>
	<van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <searchList :list="searchList"></searchList>
    </van-list>
  </van-tab>
  <van-tab title="搜索id">
	<van-search v-model="searchId" placeholder="请输入搜索id" round></van-search>
	<van-list
        v-model="loading2"
        :finished="finished2"
        finished-text="没有更多了"
        @load="onLoad2"
        >
        <searchList :list="searchList"></searchList>
    </van-list>
  </van-tab>
</van-tabs>
	

	
  </div>
</template>

<script>
import { search, search1 } from '@/api/article'
export default {
	data() {
		return {
			searchValue: "",
			searchId: "",
			searchList: [],
			loading: true,
            finished: false,
			loading2: true,
            finished2: false,
			active: 2
		}
	},
	 
	methods: {
        onLoad() {
            // this.pageNum++;
            this.searchValue()
        },
        onLoad2() {
            // this.pageNum++;
            this.searchValue()
        },
	},
	watch: {
		async searchValue(val) {
			const res = await search(
				 val,
				// userId: val
			)
			console.log(res)
			this.searchList = res.data.data
			this.finished = true
            this.loading = false
		},
		async searchId(val) {
			const res = await search1(
				 val
			)
			console.log(res)
			this.searchList = res.data.data
			this.finished2 = true
            this.loading2 = false
		}
	}
}
</script>

<style>

</style>