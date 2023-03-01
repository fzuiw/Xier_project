<template>
  <div>
    <van-dialog
      use-slot
      :title="month + '月签到'"
      :show="show"
      closeOnClickOverlay
      :showConfirmButton="false"
      @close="onClose"
    >
      <div class="sign-in-wrap">
        <ul>
          <li v-for="item in signInDays" :key="item.day">
            <div :class="{active: item.isToday}">{{item.day}}</div>
            <van-icon color="#e41f19" name="success" v-if="item.signIn"/>
            <div v-if="!item.signIn && item.isToday" class="today">今天</div>
          </li>
        </ul>
        <div style="padding: 10px">
          <van-button round block color="#e41f19" :disabled="isSignInToady" @click="signIn">{{ isSignInToady ? '今日已签到' : '签到'}}</van-button>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import {qian} from '@/api/user.js'
export default {
  name: 'index',
  data() {
    return {
      show: false,
      isSignInToady: false,
      signInCount: 0,
      signInMap: [],
      month: 0,
      signInDays: [], // [{day: 1, signIn: false, active: false, today: false}]
    }
  },
  methods: {
    // 点击签到
    signIn() {
      if (!this.isSignInToady) {
        this.qian().then((res) => {
          this.signInMap[new Date().getDate()] = true
          this.signInCount = this.signInCount + 1
          this.isSignInToady = true
          wx.showToast({ icon: 'success', title: '签到成功' })
          this.$store.dispatch('getUserDetail')
          this.renderSignInDays()
        })
      }
    },
    // 渲染本月日期
    renderSignInDays() {
      const now = new Date()
      const nowDate = now.getDate()
      const year = now.getFullYear()
      const month = now.getMonth() + 1
      this.month = month
      const day = new Date(year, month, 0)
      const days = day.getDate()
      const signInDays = []
      for (let i = 0; i < days; i++) {
        signInDays.push({
          day: i + 1,
          signIn: this.signInMap[i + 1],
          isToday: nowDate - 1 === i,
        })
        if (nowDate - 1 === i && this.signInMap[i + 1]) {
          this.isSignInToady = true
        }
      }
      this.signInDays = signInDays
    },
    // 显示签到框
    showSignIn() {
      this.show = true
      this.renderSignInDays()
    },
    getDate() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const d = new Date(year, month, 0)
      return d.getDate()
    },
    onClose() {
      this.show = false
    },
    // 获取本月的签到记录
    getThisMonthSignInRecord() {
      const res = qian()
        this.signInCount = res.length
        const day = new Date().getDate()
        res.forEach((item) => {
          this.signInMap[item.day] = true
          if (day === item.day) {
            this.isSignInToady = true
          }
        })
      })
    },
  },
  mounted() {
      this.getThisMonthSignInRecord()
  },
}
</script>

<style scoped lang="less">
  /* @import "../../assets/css/varible"; */
  .sign-in-wrap{
    padding: 20px 0;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 14%;
        text-align: center;
        height: 40px;
        .today{
          font-size: 10px;
          color: red; 
        }
        color: blue;
        .active{
          color: yellowgreen;
          font-weight: bold;
        }
      }
    }
  }
</style>
