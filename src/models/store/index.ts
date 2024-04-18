// 所有状态管理的中转

import { configureStore } from "@reduxjs/toolkit";
import countReducer from '@/models/store/modules/counterStore'
import channelReducer from '@/models/store/modules/channleStore'
import selectReducer from '@/models/store/selectStore'
import userReducer from '@/models/userModel'

const store = configureStore({
    reducer:{
        count:countReducer,
        channelList:channelReducer,
        selectList:selectReducer,
        user:userReducer,


    }
})


export default store;