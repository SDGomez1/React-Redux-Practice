import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        amount: (state,action) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement,amount} = counterSlice.actions
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer