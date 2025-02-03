import { configureStore } from '@reduxjs/toolkit'
import todoReducers from "../features/Todo/todo.js";

export const store = configureStore({
    reducer: todoReducers,
});
