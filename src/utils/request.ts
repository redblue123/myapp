// axios 的封装处理
import axios from "axios";
import { getToken } from ".";

// 1. 根域名配置
// 2. 超时时间配置
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout:500
})

// 3. 添加请求拦截器 
// 在请求发送之前 做拦截 插入一些自定义的配置[请求参数的处理]

request.interceptors.request.use((config)=>{
    // 操作这个config 注入 token 数据
    // 1. 获取到token
    // 2. 按照后端的格式要求做token拼接 -> `Bearer ${token}` 后端决定
    const token = getToken()
    if(token){
        // config.headers.Authorization 是 axio 决定的固定写法 ,`Bearer ${token}` 后端决定
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
},(error)=>{
    return Promise.reject(error)

})

// 4. 添加响应拦截器
// 在响应返回到客户端之前做拦截 重点处理返回的数据
request.interceptors.response.use((response)=>{
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response.data
},(error)=>{
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
})

export {request} 