// 所有状态管理的中转

import { configureStore } from "@reduxjs/toolkit";
import countReducer from '@/store/counterStore'
import channelReducer from '@/store/channleStore'
import selectReducer from '@/store/selectStore'
import userReducer from '@/store/modules/user'

const store = configureStore({
    reducer:{
        count:countReducer,
        channelList:channelReducer,
        selectList:selectReducer,
        user:userReducer,


    }
})


export default store;