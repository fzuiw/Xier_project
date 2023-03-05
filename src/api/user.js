import request from "@/utils/request";
// import request from "@/utils/ajax";


// 注册
export function register(user) {
    return request.post('/user/register', user)
}

//登录
export function login(user) {
    return request.post('/login', user)
}

//获取人员信息
export function user() {
    return request.get('/user/userInfo')
}

//签到
export function qian() {
    return request.get('/user/signIn')
}


//修改人员信息
export function edituser({ avatar, nickName, sex, phonenumber, email }) {
    return request({
      url: '/user/userInfo',
      method: 'put',
      data: {
        avatar: avatar, 
        nickName: nickName, 
        sex: sex, 
        phonenumber: phonenumber, 
        email: email
      }
    })
  }

//提交新项目
export function addart(add) {
    return request.post('/project' , add)
}

// export const loadFiles = (img) => {
//     request({
//         url: '/upload', img, method: 'post', headers: { 'Content-Type': 'multipart/form-data' }
//     }).then((res) => {
//         alert(res)
//     }).catch((err) => {
//         console.log(err);
//     })
// }

export function loadFiles(img) {
    return request.post('/upload' , img, )
}

// export function faceUplodad(data) {
//     return request({
//       url:'/upload',
//       method:'post',
//       data:data
//     })
//   }