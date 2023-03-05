<template>
  <div>
    <van-uploader v-model="fileList" :after-read="afterRead" multiple/>
  </div>
</template>

<script>
import { loadFiles } from '@/api/user.js'
export default {
    name:"upload",
    data() {
        return {
            fileList: [],
            dataImg: new FormData()
        }
    },
    methods: {
        afterRead(file) {
            if(file.length > 1) {
                for(const item of file) {
                    console.log(item);
                    this.dataImg.append(file.file.name, file)
                }
            }else {
                this.dataImg.append("files", file)
            }
            console.log(this.dataImg)
            this.upload();
            
        },
        async upload() {
            //ajax
            await loadFiles()

        }
    }
}
</script>

<style>

</style>