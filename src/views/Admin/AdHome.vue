<template>
  <div class="adminhome-container">
    <router-view></router-view>
    <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/admin/project">项目管理</van-tabbar-item>
        <van-tabbar-item icon="home-o" to="/admin/iproject">待审核项目</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/admin/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'AdHome'
}
</script>

<style>

</style>