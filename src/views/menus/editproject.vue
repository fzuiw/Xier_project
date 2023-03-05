<template>
  <div class="edit-container">
    <van-nav-bar title="我的项目信息" right-text="保存" left-arrow @click-left="$router.back()"  @click-right="save" />
     <van-cell @click="titleshow=true" title="项目标题" :value="v.title" is-link/>
     <van-cell @click="summaryshow=true" title="项目简介" :value="v.summary" is-link/>
     <van-cell @click="conshow=true" title="项目描述" :value="v.content"  is-link/>
     <van-cell @click="targetshow=true" title="项目众筹目标" :value="v.target"  is-link/>
     <van-cell @click="comshow=true" title="项目评论" :value="v.isComment===0? '否':'是'"  is-link/>
     <van-cell @click="statusshow=true" title="项目状态" :value="v.status===2? '审核中':'草稿'" is-link/>

    <van-action-sheet
      v-model="comshow"
      :actions="actions2"
      cancel-text="取消"
      close-on-click-action
      @cancel="comshow = false"
      @select="onComSelect"
    />
    <van-action-sheet
      v-model="statusshow"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="sexshow = false"
      @select="onStatusSelect"
    />
     <van-popup v-model="titleshow" position="bottom" :style="{ height: '8%' }" >
        <van-field required v-model="v.title"  placeholder="请输入" />
    </van-popup>
     <van-popup v-model="summaryshow" position="bottom" :style="{ height: '8%' }" >
        <van-field required v-model="v.summary"  placeholder="请输入" />
    </van-popup>
     <van-popup v-model="conshow" position="bottom" :style="{ height: '8%' }" >
        <van-field required v-model="v.content"  placeholder="请输入" />
    </van-popup>
     <van-popup v-model="targetshow" position="bottom" :style="{ height: '8%' }" >
        <van-field required v-model="v.target"  placeholder="请输入" />
    </van-popup>
    
    
  </div>
</template>

<script>
import { getMyList, editproject } from '@/api/article'

export default {
  name: 'User',
  data() {
      return {
        v:{
        },
        titleshow: false,
        summaryshow: false,
        conshow: false,
        targetshow: false,
        statusshow: false,
        comshow: false,
        actions: [{ name: "草稿",value:1 }, { name: "提交审核",value: 2 }],
        actions2: [{ name: "是",value: 1 }, { name: "否",value:0 }],
      }
  },
  mounted() {
    this.getProjectInfo()
  },
  methods: {
    
   async getProjectInfo() {
    const res = await getMyList(this.$route.params.id)
    this.$set(this.v, 'id', this.$route.params.id)
    this.$set(this.v, 'title', res.data.data.title)
    this.$set(this.v, 'content', res.data.data.content)
    this.$set(this.v, 'summary', res.data.data.summary)
    this.$set(this.v, 'target', res.data.data.target)
    this.$set(this.v, 'isComment', res.data.data.isComment)
    this.$set(this.v, 'status', res.data.data.status)
   },
   async save() {
    try {
        await editproject({
            id:this.$route.params.id,
            title: this.v.title,
            content: this.v.content, 
            summary: this.v.summary, 
            target: this.v.target,
            isComment: this.v.isComment, 
            status: this.v.status,  
        })
        console.log(this.v.title)
        this.$toast.success('修改成功')
    } catch(err) {
        this.$toast.success('错误')
    }
   },
   onStatusSelect(data) {
      this.v.status=data.value
      this.statusshow=false
    },
   onComSelect(data) {
      this.v.isComment=data.value
      this.comshow=false
    },
}
}
</script>

<style lang="less" scoped>
.filePop {
  border-radius: 20%;

}

</style>