<template>
<div>
      <!-- <van-swipe-cell class="box" v-for="v in list" :key="v.id" @click="$router.push(`/article-detail/${v.id}`)"> -->
      <van-swipe-cell class="box" v-for="v in list" :key="v.id">
      <div class="header"  @click="$router.push(`/article-detail/${v.id}`)">
        <div>
          <img class="photo" :src="v.thumbnail">
        </div>
        <div>
          <div class="content">{{ v.title }}</div>
          <div class="data">{{ v.createBy }} | {{ v.createTime  }}</div>
        </div>
        
      </div>
        <div class="little">
          <span class="data">进度 {{ v.current }}/{{ v.target }} | 浏览 {{ v.viewCount }}</span>
        </div>
        <div class="line">

        </div>
       
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" @click="handleDelete(v)" />
        </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { deleteProject} from '@/api/admin'
export default {
data() {
    return {
      
    }
  },
  // 自定义属性
  props: {
    list: Array,
  },
  methods: {
    
    async handleDelete(row) {
        
          await deleteProject({
            projectId: row.id,
        })
        // this.getUserInfo()
        
    },
    
  }
}
</script>

<style lang="less" scoped>
.delete-button, .pass-button {
    height: 100%;
  }
.box {
  margin-left:0 10px 0 10px;
   border-bottom: 1px solid #eee;
  
}
.header {
  display: flex;
  
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
</style>


