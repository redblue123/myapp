import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from 'redux'; 



const channelStore = createSlice({
    name:'channel',

    initialState:{
        channelList:[]
    },

    reducers:{
        setChannelList(state,action){
            state.channelList = action.payload
        }
    }
})

// 定义一个函数封装, 返回一个函数用同步的actioncrtaer更改payload

const {setChannelList} = channelStore.actions;


const fetchChannelList =(url:string,path:string[])=>{
    return async(dispatch:Dispatch<any>)=>{
      const res =  await axios.get(url)
      const getValueByPath = (obj:any, pathArr:string[]) => {  
        return pathArr.reduce((object, key) => (object || {})[key], obj);  
      };
      const channels = getValueByPath(res, path);  
      dispatch(setChannelList(channels))
        // dispatch(setChannelList(res.data.data.channels))
    }
}

export {fetchChannelList} 

const reducer = channelStore.reducer;

export default reducer



