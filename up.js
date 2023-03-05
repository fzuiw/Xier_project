import instance from "@/utils/ajax.js";

export const loadFiles = (img) => {
  instance({
          url: '/upload', img, method: 'post', headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
          alert(res)
      }).catch((err) => {
          console.log(err);
      })
  }