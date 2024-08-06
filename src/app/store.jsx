import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../fearures/counterSlice";


export const store = configureStore({
    reducer:{
        counter:counterSlice
    }
})