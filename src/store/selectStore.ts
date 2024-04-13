import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from 'redux'; 




const selectStore = createSlice({
    name:'selectList',

    // 数据状态state
    initialState:{
        selectList:[]
    },

    reducers:{
        // 同步修改方法
        setSelectlList(state,action){
            state.selectList = action.payload
        }
    }
})

// 定义一个函数封装, 返回一个函数用同步的actioncrtaer更改payload

const {setSelectlList} = selectStore.actions;


const fetchSelectList =(url:string,path:string[])=>{
    return async(dispatch:Dispatch<any>)=>{
      const res =  await axios.get(url)
      const getValueByPath = (obj:any, pathArr:string[]) => {  
        return pathArr.reduce((object, key) => (object || {})[key], obj);  
      };
      const selectChannels = getValueByPath(res, path);  
      dispatch(setSelectlList(selectChannels))
        // dispatch(setChannelList(res.data.data.channels))
    }
}

export {fetchSelectList} 

const reducer = selectStore.reducer;

export default reducer



