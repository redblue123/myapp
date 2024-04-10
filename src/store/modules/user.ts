// 和用户相关的状态管理

import { createSlice } from "@reduxjs/toolkit";
import {request} from "@/utils";
import {setToken as _setToken, getToken, removeToken} from '@/utils'
const userStore = createSlice({
    name:"user",
    initialState:{
        // 能取到就用localStorage中的token_key, 没有再取空串
        token:getToken()||'',
    },
    // 同步修改方法
    reducers:{
        setToken(state,action){
            // 存一份在store中(既可以存到redux)
            state.token = action.payload
            // 存一份在localstorage中(也可以存到本地)
            // localStorage.setItem('token_key',action.payload)

            // 单独封装了一个token相关的方法
            _setToken(action.payload)

        }
    }
})

// 解构actionCreater
const {setToken} = userStore.actions;

// 获取reducer函数

const userReducer = userStore.reducer;

// 异步方法 完成登录获取token 
// loginForm 提交的表单数据

const fetchLogin =  (loginForm:any)=>{
    return async(dispatch:any)=>{
        // 发送异步请求 
        const res = await request.post('/authorizations',loginForm)
        // 提交同步action进行token的存入
        dispatch(setToken(res.data.token))
    }
}

export {fetchLogin, setToken}

export default userReducer;