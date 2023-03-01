import request from "@/utils/request";

//登录
export function adlogin(user) {
    return request.post('/admin/login', user)
}

//待审核列表
export function getList(config) {
  return request.get('/admin/projectList', {
      params: config
  })
}

//审核通过
export function passProject(projectId) {
    return request({
      url: '/admin/passProject',
      method: 'put',
      params: projectId

    })
  }

//审核不通过
export function rejectProject(projectId) {
  return request({
    url: '/admin/rejectProject',
    method: 'put',
    params: projectId

  })
}

//删除项目
export function deleteProject(projectId) {
  return request({
    url: '/admin/deleteProject',
    method: 'DELETE',
    params: projectId
  })
}
