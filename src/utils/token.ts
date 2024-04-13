// 封装和token相关的方法 存 取 删

// 在这三个方法里都需要共享一个key 用变量转一下不容易出错
const TOKENKEY = 'token_key'

function setToken(token:any){
    localStorage.setItem(TOKENKEY, token)    
}

function getToken(){
    return localStorage.getItem(TOKENKEY)
}

function removeToken(){
    localStorage.removeItem(TOKENKEY)
}

export {
    setToken,
    getToken,
    removeToken
}
