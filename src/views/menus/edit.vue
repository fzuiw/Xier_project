<template>
  <div class="edit-container">
    <van-nav-bar title="个人信息" right-text="保存" left-arrow @click-left="$router.back()"  @click-right="save" />
     <van-cell  title="头像" is-link>
        <template #default>
          <van-uploader :after-read="afterRead" >
            <img width="37px" :src="v.avatar" alt="">
          </van-uploader>
          <!-- <img :src="v.avatar" round width="50px" height="50px" alt=""> -->
        </template>
     </van-cell>
     <van-cell @click="nameshow=true" title="昵称" :value="v.nickName" is-link/>
     <van-cell @click="sexshow=true" title="性别" :value="v.sex===0? '男':'女'" is-link/>
     <van-cell @click="phshow=true" title="手机号" :value="v.phonenumber"  is-link/>
     <van-cell @click="emailshow=true" title="邮箱" :value="v.email"  is-link/>

     
      

    <van-action-sheet
      v-model="sexshow"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="sexshow = false"
      @select="onGenderSelect"
    />
     <van-popup v-model="phshow" position="bottom" :style="{ height: '8%' }" >
        <van-field required v-model="v.phonenumber"  placeholder="请输入" />
    </van-popup>
     <van-popup v-model="emailshow" position="bottom" :style="{ height: '8%' }" >
        <van-field required v-model="v.email"  placeholder="请输入" />
    </van-popup>
    <!-- 修改用户昵称弹出层 -->
     <van-popup v-model="nameshow" position="bottom" :style="{ height: '8%' }" >
        <van-field required v-model="v.nickName"  placeholder="请输入" />
    </van-popup>
    <!-- 导入修改头像子组件 -->
    <van-popup class="filePop" v-model="show">
        <div class="updataAva">
            <div @click="openFile">从相册中选择</div>
            <hr>
            <input @change="changeImg" ref="inputFileRef" type="file" style="display: none">
            <div @click="show=false">取消</div>
        </div>
    </van-popup>
    
  </div>
</template>

<script>
import { user, edituser, loadFiles } from '@/api/user'

export default {
  name: 'User',
  data() {
      return {
        v:{
        },
        nameshow: false,
        sexshow: false,
        showPicker: false,
        phshow: false,
        emailshow: false,
        show: false,
        actions: [{ name: "男",value: 0 }, { name: "女",value:1 }],
      }
  },
  mounted() {
    this.getUserInfo()
    this.getUserData()
  },
  methods: {
    
   async getUserInfo() {
    const res = await user()
    this.$set(this.v, 'avatar', res.data.data.avatar)
    this.$set(this.v, 'nickName', res.data.data.nickName)
    this.$set(this.v, 'sex', res.data.data.sex)
    this.$set(this.v, 'phonenumber', res.data.data.phonenumber)
    this.$set(this.v, 'email', res.data.data.email)
   },
   async getUserData() {
    const res = await user()
    this.$set(this.v, 'avatar', res.data.data.avatar)
   },
   async save() {
    try {
        await edituser({
            avatar: this.v.avatar,
            nickName: this.v.nickName,
            sex: this.v.sex,
            phonenumber: this.v.phonenumber,
            email: this.v.email,
        })
        this.$toast.success('修改成功')
    } catch(err) {
        this.$toast.success('错误')
    }
   },

   openFile() {
            this.$refs.inputFileRef.click()
        },
   onGenderSelect(data) {
      this.v.sex=data.value
      this.sexshow=false
    },
  async afterRead(file) {
        const formData = new FormData()
      formData.append('img', file.file)
      const res = await loadFiles(formData)
     this.v.avatar = res.data.data
      },
//   onReadIdCardBack(file){
//           let params=new FormData();
//           params.append('file',file.file);
//           params.append('isPermission','N');
//           loadFiles(file).then(res => {
//                       // 根据自己的实际情况组装数据，我这里上传的文件需要图片的ID和name所以我就用一个对象picture装起来，
//                       然后把数据push到pictureList数组中去
//                        let picture={};
//                        this.pictureList.push(picture)
//           }).catch((e)=>{
//           })
// },
    
}
}
</script>

<style lang="less" scoped>
.filePop {
  border-radius: 20%;

}
/deep/.van-nav-bar {
  background-color: #f1592a;
}

</style>