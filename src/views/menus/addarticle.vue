<template>
  <div class="add">
    <van-nav-bar fixed
        title="提交项目"
        left-arrow
        left-text="返回"
        @click-left="$router.back()">
        <template #left>
          <img class="logo" src="@/assets/images/logo2.png">
        </template>
    </van-nav-bar>
      
      <van-form @submit="onSubmit">
        <van-field
          v-model="add.title"
          name="项目标题"
          label="项目标题"
          placeholder="项目标题"
          :rules="[{ required: true, message: '请填写项目标题' }]"
        />
        <van-field
          v-model="add.summary"
          name="项目简介"
          label="项目简介"
          placeholder="项目简介"
          :rules="[{ required: true, message: '请填写项目简介' }]"
        />
        <van-field
          v-model="add.content"
          name="项目描述"
          label="项目描述"
          placeholder="项目描述"
          :rules="[{ required: true, message: '请填写项目描述' }]"
        />
        <van-field
          v-model="add.target"
          name="众筹目标"
          label="众筹目标"
          placeholder="众筹目标"
          :rules="[{ required: true, message: '请填写众筹目标' }]"
        />
        <van-field name="radio" label="评论">
          <template #input>
            <van-radio-group v-model="add.isComment" direction="horizontal">
              <van-radio name="1">是</van-radio>
              <van-radio name="0">否</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <!-- <van-field name="radio2" label="项目状态">
          <template #input>
            <van-radio-group v-model="add.status" direction="horizontal">
              <van-radio name="1">草稿</van-radio>
              <van-radio name="0">提交审核</van-radio>
            </van-radio-group>
          </template>
        </van-field> -->
        <van-field name="uploader" label="缩略图上传" >
          <template #input>
            <van-uploader v-model="add.thumbnail" :max-count="1" :after-read="afterRead" />
          </template>
        </van-field>
        <!-- <van-uploader v-model="add.thumbnail" :after-read="afterRead"></van-uploader> -->
        <van-field name="uploader2" label="证明图片">
          <template #input>
            <van-uploader v-model="add.pictures.pictures" :before-read="beforeRead" :after-read="afterRead1" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
  </div>
</template>

<script>
import { addart } from '@/api/user'
import { loadFiles } from '@/api/article'
export default {
  data() {
      return {
        add: {
            content: '',
            summary: '',
            title: '',
            target: '',
            isComment: '1',
            pictures: [],
            thumbnail: [],
            
            
        },
        i:0
        
      }
    },
    methods: {
      checkFile(file) {
      const format = ["jpg", "png"];
      const index = file.name.lastIndexOf(".");
      const finalName = file.name.substr(index + 1);
      if (!format.includes(finalName.toLowerCase())) {
        Toast("请上传" + format.join(",") + "格式图片");
        return false;
      }
    },
      beforeRead(file) {
      if (file instanceof Array) {
        //判断是否是数组
        file.forEach((v) => {
          this.checkFile(v);
        });
      } else {
        this.checkFile(file);
      }
      return true;
    },

      async afterRead(file) {
        const formData = new FormData()
      formData.append('img', file.file)
      const res = await loadFiles(formData)
      this.add.thumbnail = res.data.data
   },
      async afterRead1(file) {
        // if(file.length > 1) {
        //   for (const item of file) {
        //     console.log(item);
        //     this.dataImg.append('img', file.file);
        //     const res = await loadFiles(formData)
        //     this.add.pictures = res.data.data
        //   }
        // } else {
        //   console.log(`已添加${file.file.name}`);
        //   this.dataImg.append('img', file.file);
        //    const res = await loadFiles(formData)
        //     this.add.pictures = res.data.data
        // }
         const formData = new FormData()
        formData.append('img', file.file)
        const res = await loadFiles(formData)
        this.add.pictures = res.data.data
        // res.data.forEach(item => this.add.pictures.pictures.push(item))
        
      },
      // async upDataImg() {
      //   const res = await loadFiles(this.dataImg); 
      //   console.log(res)
      //   // this.pictures[item] = res.f
      // },
      async onSubmit() {
        const res =  await addart(this.add)
        console.log(res)
        this.$toast.success('添加成功')
        // this.$router.push('/login')

    },
    },
}
</script>

<style lang="less" scoped>
.add {
  padding: 46px 0 50px 0;
    .logo {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-top: 3px;
  }
  /deep/.van-button {
    background-color: #fd2c50
  }
}

</style>