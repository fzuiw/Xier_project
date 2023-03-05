<template>
  <div>
    <div class="box" v-for="v in list" :key="v.id" @click="$router.push(`/article-detail/${v.id}`)">
     
      <div class="header">
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
    </div>
    </div>
</template>

<script>
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
    stripTag(content) {
      return content.replace(/<[^>]+>/g, '')
    }
  }
}
</script>

<style lang="less" scoped>
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