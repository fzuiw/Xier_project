<template>
  <div>
    <van-nav-bar
      title="项目详情"
      left-arrow
      left-text="返回"
      @click-left="$router.back()"
    />
    <div class="box">
      <div class="header">
        <h3>{{v.title}}</h3>
      </div>
      
      
      <div class="one">
        <img class="photo" src="@/assets/images/iu.jpg" alt="">
        <span class="time">{{v.createBy}}</span>
      </div>
      <div class="content">项目简介: {{v.summary}}</div>
      <div class="content">项目描述: {{v.content}}</div>
      <!-- <van-swipe-item  v-for="(item,index) in v.pictures" :key="index">
        <img :src="item.pictures" >
      </van-swipe-item> -->
      <div class="cur">
        <van-progress :percentage="(v.current/v.target)*100" />
      </div>
      <div class="right1">
        <span class="time">{{v.viewCount}} 浏览</span>
      </div>
      <br>
      <div class="right2">
        <span class="time">{{v.createTime}} </span>
      </div>
        
      <div class="btn">
        <van-button @click="jitui" round type="info" >为ta加🍗</van-button>
        <van-button plain round type="info" v-if="v.isComment==='1'" >评论</van-button>
        <van-button disabled plain round type="info" v-else>评论</van-button>
      </div>
      
    </div>
  </div>

</template>

<script>
import { getOneList, putfen } from '@/api/article'

export default {
  data() {
    return {
      v: {}
    }
  },
  created() {
    console.log(this.$route.params.id);
    this.getNewList()
  },
  methods: {
    async getNewList() {
      const res = await getOneList(this.$route.params.id)
      this.v = res.data.data
      console.log(this.v);
     
    },
   
    jitui() {
			const res =  putfen({
				inputPoints: 1,
        targetProjectId: this.$route.params.id
				// userId: val
			})
      
        this.v.current = this.v.current * 1
        this.v.current ++
        this.v.points = this.v.points * 1
        this.v.points --
      
      
      
      console.log(res)
		},
   
  }
}
</script>

<style lang="less" scoped>
.box {
  position: relative;
  padding: 16px;
}
.header {
  position: absolute;
  margin-top: 10px;
  left: 52%;
  transform: translate(-50%, -50%);
}

.one {
  display: flex;
  align-items: center;
  margin: 12px 10px 12px 0;
}
.time {
  color: #888;
  font-size: 9px;
}
.right1 {
  position: absolute;
  margin-top: 20px;
  // margin-left: 50px;
  right: 0;
  transform: translate(-50%, -50%);
}
.right2 {
  position: absolute;
  margin-top: 20px;
  // margin-left: 50px;
  right: -10%;
  transform: translate(-50%, -50%);
}
.content {
  margin-left: 30px;
  margin-top: 10px;
}
.cur {
  margin-top: 20px;
}
.btn {
  position: absolute;
  margin-top: 40px;
  right: 0;
}
.photo {
  margin-top: 12px;
  width: 50px;
  height:  50px;
  border-radius: 50%;
}
</style>