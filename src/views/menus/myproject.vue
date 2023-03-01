<template>
  <div class="project-container">
    <van-nav-bar title="我的项目" fixed left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <myarticleList :list="myarticleList"></myarticleList>
    </van-list>
  </div>

</template>

<script>
import { getMyArticle } from '@/api/article'

export default {
    data() {
        return {
            pageNum: 1,
            pageSize: 1,
            myarticleList: [],
            loading: true,
            finished: false,
        }
    },
    created() {
        this.loadArticle()
    },
    methods: {
      async loadArticle() {
            const res = await getMyArticle({
                pageNum:this.pageNum, 
                pageSize: this.pageSize
        })
            if(this.pageNum === 1) {
                this.myarticleList = res.data.data.rows
            }else {
                this.myarticleList = this.myarticleList.concat(res.data.data.rows)
            }
            console.log(this.myarticleList);
            if(this.pageNum >= res.data.data.pageTotal) {
                this.finished = true
            }
            this.loading = false
            
        },
        onLoad() {
            this.pageNum++;
            this.loadArticle()
        }
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