<template>
  <div class="login-container">
    <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div> 
    <div class="logo-box">
          <!-- <img class="logo" round src="@/assets/images/logo.png"> -->
    </div>
    <div class="content">
           <van-form class="form" @submit="onSubmit">
                <van-field
                    v-model="user.username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="user.password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div class="btn" style="margin: 16px;">
                    <van-button @click="reset" class="regbtn" round block type="info" native-type="button">重置</van-button>
                    <van-button class="subbtn" round block type="info" native-type="submit">登录</van-button>
                </div>
            </van-form>
            <router-link class="link" to='/login'>一般用户 从此进</router-link>
        </div>
    </div>  
</template>

<script>
import { adlogin } from '@/api/admin';
import { setToken } from '@/utils/token';
import { Notify } from 'vant' ;

export default {
  name: 'AdLogin',
  data() {
    return {
      //存储数据的对象
      user:{
        username:'',
        password:''
      },

      // username: '',
      // password: '',
      imgSrc:require('@/assets/images/img2.jpg')
    }
  },
  methods: {
    reset() {
      this.username = ''
      this.password = ''
    },
   
    async onSubmit() {
      const res = await adlogin(this.user)
      console.log(res.data.data.token);
      setToken(res.data.data.token)
      Notify({type: 'success', message:'登录成功'})
      this.$router.push('/admin')
    },
  }
}
</script>

<style lang="less" scoped>
.login-container {
    .background {
      -webkit-filter: brightness(70%); /*考虑浏览器兼容性：兼容 Chrome, Safari, Opera */
      filter: brightness(70%);
      width:100%;
      height:100%;  /**宽高100%是为了图片铺满屏幕 **/
      // z-index:-1;
      position: absolute;
    
    }
    .content {
        // width: 310px;
        // height: 200px;
        background-color: rgba(255, 255, 255, 0.5);
        // z-index:1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 20px;
        .link {
          color: antiquewhite;
          font-size: 5px;
          position: absolute;
          bottom: 0;
          right: 9px;
        }
        .form {
            margin-left: 5px;
            margin-top: 50px;
            width: 300px;
            // height: 44px;
            .btn {
                display: flex;
                .van-button {
                    width: 100px;
                    background-color: rgba(78, 97, 206, 0.952);
                    border: none;
                }
            }
            .subbtn {
                margin-left: 65px;
               
            }
        }
        
    }
    .logo-box {
        position: absolute;
        top: 32%;
        left: 48%;
          .logo {
            // position: relative;
            margin-top: 3px;
            // left: 50%;
            // background-color: #fff;
            width: 40px;
            height: 40px;
          }
        }
}
</style>
