import { configureStore } from "@reduxjs/toolkit";
import countReducer from '@/models/store/counterStore'
import channelReducer from '@/models/store/channleStore'

const store = configureStore({
    reducer:{
        count:countReducer,
        channelList:channelReducer

        
    }
})


export default store;