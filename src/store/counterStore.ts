import { createSlice } from "@reduxjs/toolkit";

const countRducer = createSlice({
    name:'counters',

    initialState:{
        count:0
    },

    reducers:{
        decrement(state){
            state.count ++;
        },
        increment(state){
            state.count --;
        },
        incrementTen(state, action){
            state.count += action.payload

        },


    }
})

const {decrement, increment, incrementTen} = countRducer.actions;
const reducers = countRducer.reducer

export  {decrement, increment, incrementTen} 

export default reducers

console.dir(reducers)