<template>
 <div class="user-container">
   <!-- 用户基本信息面板 -->
   <div class="user-card">
     <!-- 用户头像、姓名 -->
     <van-cell>
       <!-- 使用 title 插槽来自定义标题 -->
       <template #icon>
         <img src="@/assets/images/logo.png" alt="" class="avatar" />
       </template>
       <template #title>
         <span class="username">admin</span>
       </template>
       <template #label>
         <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
       </template>
     </van-cell>
     <!-- 动态、关注、粉丝 -->
     <div class="user-data">
       <div class="user-data-item">
         <span>所有项目</span>
       </div>
       <div class="user-data-item">
         <span>待审核项目</span>
       </div>
     </div>
   </div>

   <!-- 操作面板 -->
   <van-cell-group class="action-card">
     <van-cell icon="edit" title="编辑资料" is-link />
     <van-cell icon="chat-o" title="帮助" is-link />
     <van-cell icon="warning-o" title="退出登录"  is-link @click="logout()"/>
    </van-cell-group>
 </div>
 </template>

 
<script>
  import {  deleteToken } from '@/utils/token'
 export default {
  name: 'User',
  methods: {
    logout() {

        deleteToken()
        this.$router.push('/adminLogin')
      },
      
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .user-card {
    background-color: #f36523;
    color: white;
    padding-top: 20px;
    .van-cell {
      background: #f36523;
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