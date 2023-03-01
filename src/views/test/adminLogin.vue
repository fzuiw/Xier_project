<template>
  <div>
    <van-nav-bar
        title="提交项目"
        left-arrow
        left-text="返回"
        @click-left="$router.back()"
      />
      
      <van-form @submit="onSubmit">
        <van-field
          v-model="title"
          name="项目标题"
          label="项目标题"
          placeholder="项目标题"
          :rules="[{ required: true, message: '请填写项目标题' }]"
        />
        <van-field
          v-model="sum"
          name="项目简介"
          label="项目简介"
          placeholder="项目简介"
          :rules="[{ required: true, message: '请填写项目简介' }]"
        />
        <van-field
          v-model="content"
          name="项目描述"
          label="项目描述"
          placeholder="项目描述"
          :rules="[{ required: true, message: '请填写项目描述' }]"
        />
        <van-field
          v-model="target"
          name="众筹目标"
          label="众筹目标"
          placeholder="众筹目标"
          :rules="[{ required: true, message: '请填写众筹目标' }]"
        />
        <van-field name="radio" label="评论">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">是</van-radio>
              <van-radio name="0">否</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        content: '',
        sum: '',
        title: '',
        target: '',
        radio: '1',
        uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
    },
}
</script>

<style>


</style>