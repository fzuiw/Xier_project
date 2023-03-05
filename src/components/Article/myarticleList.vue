<template>
  <div>
    <van-swipe-cell class="box" v-for="v in list" :key="v.id" >
      <div class="header">
        <div>
          <img class="photo" :src="v.thumbnail" @click="$router.push(`/myarticle-detail/${v.id}`)">
        </div>
        <div>
          <div class="content">{{ v.title }}</div>
          <div class="data">{{ v.createBy }} | {{ v.createTime  }}</div>
        </div>
       <!-- <div class="right"><van-button square @click="btn" text="删除" type="danger" class="delete-button" /></div> -->
      </div>
        <div class="little">
          <span v-if="v.status==='0'" class="data">已发布&nbsp;&nbsp; </span>
          <span v-else-if="v.status==='1'" class="data">草稿&nbsp;&nbsp; </span>
          <span v-else class="data">正在审核&nbsp;&nbsp; </span>
          <span class="data"> {{ v.current }}/{{ v.target }} | 浏览 {{ v.viewCount }}</span>
        </div>
        <div class="line">

        </div>
         <template #right>
    <van-button square text="删除" type="danger" class="delete-button" @click="handleDelete(v)"/>
  </template>
      </van-swipe-cell>
    
    </div>
</template>

<script>
import { getMyList, deleteMyProject } from '@/api/article'
export default {
  data() {
    return {
      v: {}
    }
  },
  // 自定义属性
  props: {
    list: Array,
  },
  //  mounted() {
  //   this.getUserInfo()
  // },
  methods: {
   
    
   async getProjectInfo() {
    const res = await getMyList(this.$route.params.id)
    // this.$set(this.v, 'title', this.$route.params.id)
    this.$set(this.v, 'title', res.data.data.title)
    this.$set(this.v, 'content', res.data.data.content)
    this.$set(this.v, 'summary', res.data.data.summary)
    this.$set(this.v, 'target', res.data.data.target)
    this.$set(this.v, 'isComment', res.data.data.isComment)
    this.$set(this.v, 'status', res.data.data.status)
   },
    async handleDelete(row) {
        
          await deleteMyProject(
          row.id,
        )
        // this.getUserInfo()
        
    },
    
    // btn(row) {
    //   this.handleDelete(row)
    // }
  }
}
</script>

<style lang="less" scoped>
.box {
  // position: absolute;
  margin-left:0 10px 0 10px;
   border-bottom: 1px solid #eee;
  
}
.header {
  display: flex;
  
}
.right {
 margin-left:0 10px 0 10px;
   border-bottom: 1px solid #eee;
}
.photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 8px 8px 8px 0;
}
.data {
  color: #999;
  font-size: 8px;
}
.little{
  // position: relative;
  // bottom: 0;
  // right: 0;
  display: flex;
  float: right;
  margin-top: -18px;
 
}
.content {
  margin: 10px 0 5px 0;
}
 .delete-button {
    height: 100%;
  }
</style>