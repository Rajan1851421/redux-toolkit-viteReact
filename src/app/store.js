import { configureStore } from "@reduxjs/toolkit";
import todoReucer from "../features/todo/todoSlice";



export const store = configureStore({ 
    reducer: todoReucer
})