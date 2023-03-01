const manyToken = 'hm-token'

export function setToken(token) {
    localStorage.setItem('hm-token',token)
}

export function getToken() {
    return localStorage.getItem(manyToken)
}

export function deleteToken() {
    localStorage.removeItem(manyToken)
}