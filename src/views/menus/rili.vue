<template>
  <div>
    <div class="top">
      <div class="button" v-if="!sign" @click="Sign">
        <!-- <i class="calendar-icon"></i> -->
        <div>去签到</div>
      </div>
    </div>
    <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '500px' }"
     />
  </div>
</template>

<script>
export default {
    data() {
    return {
     
      currentDay: 1, // 当前天
      currentMonth: 1, // 当前月
      currentYear: 1970,
      currentWeek: 1, // 一号所在的星期
      days: [], // 当月所有天数
      content: {},
      arrDate: [], // 当月签到日期
      num: 0,
      day: 10,
      sign: false,
    };
  },
  created() {
    this.getSign();
  },
    methods: {
        async getSign() {
      // 接口未完成，模拟数据
      const sign_days = await qian()
      // this.v = res.data.data
      console.log(sign_days);
      // const sign_days = [
      //   { day: 5 }, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }
      // ];
      for (const i in sign_days) {
        this.arrDate.push(sign_days[i].day);
      }
      this.initData(null);
    },
    initData(cur) {
      let date;
      if (cur) { // 切换日期
        date = new Date(cur);
      } else {
        var now = new Date();
        var d = new Date(this.formatDate(now.getFullYear(), now.getMonth() + 1, 1));
        d.setDate(35);// 设置天数为35天
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth(), 1));
      }
      this.currentDay = date.getDate(); // 今日日期 几号
      this.currentYear = date.getFullYear(); // 当前年份
      this.currentMonth = date.getMonth() + 1; // 当前月份

      this.currentWeek = date.getDay(); // 0,1...6 星期
      const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay); // 2020-01-01
      this.days.length = 0; // 初始化日期
      // 如果今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
      for (var i = this.currentWeek; i > 0; i--) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        var dayobject = {}; // 用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobject.day = d;
        this.days.push(dayobject); // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 其他周 // 设置天数为35天,周日设置在第一位，循环从36开始
      this.num = 0;
      for (var j = 0; j <= 36 - this.currentWeek; j++) {
        const d = new Date(str);
        d.setDate(d.getDate() + j);
        const dddd = d.getDate();
        if (dddd === 1) {
          this.num++;
        }
        if (this.num === 2) {
          return;
        }
        const dayobject = { day: d, isSign: this.isVerDate(dddd) };
        this.days.push(dayobject);
      }
    },
    /**
     * 判断该日期是否有签到
     * @param v
     * @returns {boolean}
     */
    isVerDate(v) {
      return this.arrDate.includes(v);
    },
    /**
     * 上一月
     * @param year
     * @param month
     */
    pickPre(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    /**
     * 下一月
     * @param year
     * @param month
     */
    pickNext(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 返回 类似 2020-01-01 格式的字符串
    formatDate(year, month, day) {
      month < 10 && (month = '0' + month);
      day < 10 && (day = '0' + day);
      const data = year + '-' + month + '-' + day;
      return data;
    },
        Sign() {
      const now = new Date();
      this.arrDate.push(now.getDate());
      this.initData();
      // this.v = res.data.data
      this.$toast.success('签到成功');
    }
    }
}
</script>

<style lang="less" scoped>
.top {
    background: url('@/assets/images/img1.jpg') no-repeat 0 0;
    background-size: 100% 100%;
    overflow: hidden;
    color: #ffffff;
    padding: 15px;
    height: 120px;
    text-align: center;
    .button {
      display: flex;
      justify-content: center;
      border: 1px solid #ffffff;
      border-radius: 20px;
      color: #ffffff;
      font-size: 18px;
      width: 120px;
      margin: 0 auto 10px;
      height: 40px;
      line-height: 40px;
    }
}
</style>