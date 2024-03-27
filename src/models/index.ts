import { configureStore } from "@reduxjs/toolkit";
import countReducer from '@/models/counterStore'
import channelReducer from '@/models/channleStore'




const store = configureStore({
    reducer:{
        count:countReducer,
        channelList:channelReducer

        
    }
})


export default store;