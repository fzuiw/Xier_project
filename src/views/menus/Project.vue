<template>
  <div class="project-container">
      <van-nav-bar title="疯狂星期四" fixed>
        <template #left>
          <img class="logo" src="@/assets/images/logo2.png">
        </template>
      </van-nav-bar>
      <form action="/">
              <van-search
                v-model="search"
                show-action
                placeholder="请输入搜索关键词"
                shape="round"
                background="#fff"
                @search="onSearch"
                @cancel="onCancel"
              />
      </form>
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ProjectInfo
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :createBy="item.createBy"
          :createTime="item.createTime"
          :thumbnail="item.thumbnail"
          :viewCount="item.viewCount"
        ></ProjectInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getProjectListAPI } from '@/api/projectAPI.js'
import ProjectInfo from '@/components/Project/ProjectInfo.vue'

export default {
  name: 'Project',
  data() {
    return {
      search: '',
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章的数组
      artlist: [],
      // 是否正在加载下一页数据，如果 loading 为 true，则不会反复触发 load 事件
      // 每当下一页数据请求回来之后，千万要记得，把 loading 从 true 改为 false
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把 finished 改成 true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  created() {
    this.initProjectList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initProjectList(isRefresh) {
      // 发起 GET 请求，获取文章的列表数据
      const { data: res } = await getProjectListAPI(this.page, this.limit)

      if (isRefresh) {
        // 证明是下拉刷新；新数据在前，旧数据在后
        // this.artlist = [新数据在后, 旧数据在前]
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        // 证明是上拉加载更多；旧数据在前，新数据在后
        // this.artlist = [旧数据在前, 新数据在后]
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        // 证明没有下一页数据了，直接把 finished 改为 true，表示数据加载完了！
        this.finished = true
      }
    },
    // 只要 onLoad 被调用，就应该请求下一页数据
    onLoad() {
      console.log('触发了 load 事件！')
      // 1. 让页码值 +1
      this.page++
      // 2. 重新请求接口获取数据
      this.initProjectList()
    },
    // 下拉刷新的处理函数
    onRefresh() {
      console.log('触发了下拉刷新！')
      // 1. 让页码值 +1
      this.page++
      // 2. 重新请求接口获取数据
      this.initProjectList(true)
    },
    onSearch(val) {
      console.log("search")
    },
    onCancel() {
      console.log("cancel")
    },
  },
  // 注册组件
  components: {
    ProjectInfo
  }
}
</script>

<style lang="less" scoped>
.project-container {
  padding: 46px 0 50px 0;
    .logo {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-top: 3px;
  }
}
</style>
