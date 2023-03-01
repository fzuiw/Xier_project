<template>
  <!-- <div class="file"> -->
    <van-popup class="filePop" v-model="show">
        <div class="updataAva">
            <div @click="openFile">从相册中选择</div>
            <input @change="changeImg" ref="inputFileRef" type="file" style="display: none">
            <div class="borderDiv">拍照</div>
            <div>取消</div>
        </div>
    </van-popup>
  <!-- </div> -->
</template>

<script>
export default {
    name: 'filePopup',
    data: {
        return: {
            show: false
        }
       
    },
    methods: {
        openFile() {
            this.$refs.inputFileRef.click()
        }
    }
}
</script>

<style>

</style>