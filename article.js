import request from '@/utils/request'

//列表
export function getArticle(config) {
    return request.get('/project/list', {
        params: config
    })
}

//列表2
export function getArticle2(config) {
    return request.get('/project/hotProjectList', {
        params: config
    })
}

//我的列表
export function getMyArticle(config) {
    return request.get('/project/myProjectList', {
        params: config
    })
}

//单个详情
export function getOneList(id) {
    return request.get(`/project/${id}`, {
        params: {
            id
        }
    })
}

//我的项目详情
export function getMyList(id) {
    return request.get(`/project/myProject/${id}`, {
        params: {
            id
        }
    })
}

//搜索
export function search(projectTitle) {
    return request.get('/project/search', {
        params: {
            projectTitle
        }
    })
}
export function search1(userId) {
    return request.get('/project/search', {
        params: {
            userId
        }
    })
}

//投积分
export function putfen(params) {
    return request.post('/user/inputPoints', params)
}


//修改项目信息
// export function editproject({ id, title, content, summary, target, isComment, status }) {
//     return request.put(`/project/${id}`, {
//         params: {
//             id
//         },
//         data:{
//             title:title,
//             content:content, 
//             summary:summary, 
//             target:target,
//             isComment:isComment, 
//             status:status, 
//         }
//     })
// }
export function editproject({ id, title, content, summary, target, isComment, status }) {
    return request({
      url: `/project/${id}`,
      method: 'put',
      data: {
        id:id,
        title:title,
        content:content, 
        summary:summary, 
        target:target,
        isComment:isComment, 
        status:status, 
      }
    })
  }

//删除项目信息
export function deleteMyProject(id) {
    return request({
      url: `/project/${id}`,
      method: 'DELETE',
      params: {
        id
      }
    })
  }

//上传图片
export function loadFiles(img) {
    return request({
        url: '/upload',
        method: 'post',
        data: img,
        headers: { // 设置请求头
            'Content-Type': 'multipart/form-data'
          }
      })
}