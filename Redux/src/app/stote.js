import { createSlice, configureStore } from '@reduxjs/toolkit'
import todoReducers from "../features/Todo/todo";

const store = configureStore({
    reducers: todoReducers,
});

export default store;