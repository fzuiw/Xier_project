<template>
  <div class="register-container">
    <van-nav-bar
        title="注册"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
    />
    <van-form validate-first @submit="onSubmit">
        <van-field
            v-model="user.userName"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true , message: '请输入3位以上的字符' }]"
        />
        <van-field
            v-model="user.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ pattern:/^\w{3,20}$/ , message: '输入密码长度需（3~20位）' }]"
        />
        <van-field
            v-model="user.nickName"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ pattern:/^\w{1,10}$/ , message: '请输入1-10个字符' }]"
        />
        
        <!-- <van-field
            v-model="password2"
            type="password"
            name="密码2"
            label="密码验证"
            placeholder="请再次输入密码"
            :rules="[{ validator: asyncValidator, message: '两次输入密码不一致' }]"
        /> -->
        <van-field
            v-model="user.phonenumber"
            label="手机号"
            name="手机号"
            placeholder="手机号"
            :rules="[{ pattern:/^1[3-9]\d{9}$/, message: '请输入正确手机号' }]"
        />
        <van-field
            v-model="user.email"
            label="邮箱"
            name="邮箱"
            placeholder="邮箱"
            :rules="[{ pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/, message: '请输入正确的邮箱' }]"
        />
        <!-- <van-field
            v-model="idnumber"
            label="身份证"
            name="身份证"
            placeholder="身份证"
            :rules="[{ pattern:/^\d{15,18}$/, message: '请输入正确身份证号' }]"
        /> -->
        <!-- <van-field
          readonly
          clickable
          name="area"
          :value="value"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
          />
        </van-popup> -->
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
    </van-form>

  </div>
</template>

<script>
import {register} from '@/api/user'
//import { areaList } from '@vant/area-data';
export default {
    name: 'Register',
    data() {
    return {
      user: {
        userName: '',
        password: '',
        nickName: '',
        phonenumber: '',
        email: ''
      },
      
      // password2: '',
      // telephone: '',
      // idnumber: '',
      //pattern: /\w{3,}/,
      // value: '',
      // showArea: false,
      // areaList // 数据格式见 Area 组件文档
    }
  },
  methods: {
    // validator(val) {
    //     var reg1 = /^\w{6,15}$/;
    //     var reg2 = /.*\d{1,}.*/;
    //     var reg3 = /.*[a-z]{1,}.*/;
    //   return reg1.test(val)&&reg2.test(val)&&reg3.test(val);
    // },
    //  asyncValidator(val) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(val === this.password);
    //     }, 1000);
    //   })
    // },
    // onConfirm(values) {
    //   this.value = values
    //     .filter((item) => !!item)
    //     .map((item) => item.name)
    //     .join('/');
    //   this.showArea = false;
    // },
    async onSubmit() {
      const res =  await register(this.user)
      console.log(res)
      this.$toast.success('注册成功')
      this.$router.push('/login')

    },
    //  onFailed(errorInfo) {
    //   console.log('failed', errorInfo);
    // },
  },

}
</script>

<style lang="less" scoped>
.register-container {
  .van-nav-bar {
    background-color: #5a5a5a;
  }
  /deep/.van-nav-bar__text {
    color: white;
  }
  /deep/.van-nav-bar__arrow {
    color: white;
  }
  // .van-button {
  //   background-color: #037ce6;
  // }
  
}
</style>