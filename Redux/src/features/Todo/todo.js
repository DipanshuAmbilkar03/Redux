import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: "abc", task: "code", isDone:false}],
}

export const todoSlice = createSlice({
    name : "todo",
    initialState : {
        value : 0,
    },
});
