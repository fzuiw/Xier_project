<template>
  <div class="home-container">
    <router-view></router-view>
    <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/home/project">首页</van-tabbar-item>
        <van-tabbar-item icon="fire-o" to="/home/hotproject">热门</van-tabbar-item>
        <van-tabbar-item icon="search" to="/home/search">搜索</van-tabbar-item>
        <van-tabbar-item icon="add-o" to="/home/add">添加</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/home/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MyHome'
}
</script>

<style>

</style>