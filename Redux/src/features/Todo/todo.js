import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: "abc", task: "code", isDone:false}],
}

export const todoSlice = createSlice({
    name : "todo",
    initialState : {
        value : 0,
    },
    reducers : {
        addTodo : (state,action) => {
            const newTodo = {
                id : 123,
                task : action.payload,
                isDone : false,
            }
            state.todos;
        }
    }
});
