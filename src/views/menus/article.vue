<template>
  <div class="project-container">
    <van-nav-bar title="ViVO 50" fixed>
        <template #left>
          <img class="logo" src="@/assets/images/logo2.png">
        </template>
    </van-nav-bar>
    <!-- <search-input 
      :plhText="searchPlhText"
      @input-changed="searchInputChange"
    ></search-input> -->
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <articleList :list="articleList"></articleList>
    </van-list>
  </div>

</template>

<script>
import { getArticle } from '@/api/article'

export default {
    data() {
        return {
            searchPlhText: "请输入产品名称",
            pageNum: 1,
            pageSize: 1,
            articleList: [],
            loading: true,
            finished: false,
        }
    },
    created() {
        this.loadArticle()
    },
    methods: {
      async loadArticle() {
            const res = await getArticle({
                pageNum:this.pageNum, 
                pageSize: this.pageSize
        })
            if(this.pageNum === 1) {
                this.articleList = res.data.data.rows
            }else {
                this.articleList = this.articleList.concat(res.data.data.rows)
            }
            console.log(this.articleList);
            if(this.pageNum >= res.data.data.pageTotal) {
                this.finished = true
            }
            this.loading = false
            
        },
        onLoad() {
            this.pageNum++;
            this.loadArticle()
        },

      },
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