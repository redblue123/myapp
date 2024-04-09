import { configureStore } from "@reduxjs/toolkit";
import countReducer from '@/models/store/counterStore'
import channelReducer from '@/models/store/channleStore'
import selectReducer from '@/models/store/selectStore'

const store = configureStore({
    reducer:{
        count:countReducer,
        channelList:channelReducer,
        selectList:selectReducer
    }
})


export default store;