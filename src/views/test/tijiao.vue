<template>
  <div>
    <van-nav-bar
      title="项目详情"
      left-text="返回"
      @click-left="$router.back()"
    />
    <div class="box">
      <div class="header">
        <h3>v.title</h3>
      </div>
      <div class="right">
        <span class="time">时间 v.createTime | 浏览量 v.viewCount </span>
      </div>
      
      
      <div class="one">
        <img class="photo" src="@/assets/images/iu.jpg" alt="">
        <span class="time">v.createBy</span>
      </div>
      <div class="content">v.summary</div>
      <div class="content">v.content</div>
      <div class="cur">v.current/v.target
        <van-progress :percentage="50" />
      </div>
      <div class="btn">
        <van-button plain round type="info">评论</van-button>
        <van-button disabled plain round type="info">评论</van-button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {

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
.right {
  position: absolute;
  margin-top: 10px;
  right: 0;
  transform: translate(-50%, -50%);
}
.content {
  margin-left: 30px;
}
.cur {
  margin-top: 10px;
}
.btn {
  position: absolute;
  margin-top: 10px;
  right: 0;
}
.photo {
  margin-top: 12px;
  width: 50px;
  height:  50px;
  border-radius: 50%;
}
</style>


