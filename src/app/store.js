import { configureStore } from "@reduxjs/toolkit";
import  todosSlice from "../Feature/Reduser"



 export const store = configureStore({
    reducer: todosSlice
 })



