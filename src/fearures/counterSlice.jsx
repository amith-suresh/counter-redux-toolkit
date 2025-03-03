import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   count1:0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers :{
        increment:(state,action)=>{
            state.count1 = state.count1+1
        },
        decrement:(state,action)=>{
            state.count1 = state.count1-1
        },
        reset:(state,action)=>{
            state.count1 = 0
        }
    }
})

export default counterSlice.reducer
export const {increment}=counterSlice.actions
export const {decrement}=counterSlice.actions
export const {reset}=counterSlice.actions