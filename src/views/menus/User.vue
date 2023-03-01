<template>
 <div class="user-container">
   <!-- 用户基本信息面板 -->
   <div class="user-card">
     <!-- 用户头像、姓名 -->
     <van-cell>
       <!-- 使用 title 插槽来自定义标题 -->
       <template #icon>
         <img :src="v.avatar" alt="" class="avatar" />
       </template>
       <template #title>
         <span class="username">{{ v.username }}</span>
       </template>
       <template #label>
         <van-tag color="#fff" text-color="#fec267">{{ v.nickName }}</van-tag>
       </template>
     </van-cell>
     <!-- 动态、关注、粉丝 -->
     <div class="user-data">
       <div @click="toMyproject" class="user-data-item">
         <span>我的项目</span>
       </div>
       <div class="user-data-item">
         <span>{{ v.points }}</span>
         <span>鸡腿</span>
       </div>
       <div @click="toQian" class="user-data-item">
         <span>签到</span>
       </div>
     </div>
   </div>

   <!-- 操作面板 -->
   <van-cell-group class="action-card">
     <van-cell icon="edit" title="编辑资料" to="/edit" is-link />
     <van-cell icon="chat-o" title="帮助" is-link />
     <van-cell icon="warning-o" title="退出登录" to="/login" is-link @click="logout()" />
    </van-cell-group>
 </div>
 </template>

 
<script>
import { user } from '@/api/user'
import { getToken, deleteToken } from '@/utils/token'
export default {
  name: 'User',
  data() {
      return {
        v:{
          
        }
      }
  },
  async created() {
      getToken()
      const res = await user()
      this.v = res.data.data
      console.log(res.data.data);
    },
  methods: {
    logout() {
        deleteToken()
        this.$router.push('/login')
      },
    toMyproject() {
       this.$router.push('/myproject')
    },
    toQian() {
       this.$router.push('/qiandao')
    }
    
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .user-card {
    background-color: #f1592a;
    color: white;
    padding-top: 20px;
    .van-cell {
      background: #f1592a;
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
}
</style>