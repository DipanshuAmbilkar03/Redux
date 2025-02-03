import { createSlice,nanoid} from "@reduxjs/toolkit";

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
                id : nanoid(),
                task : action.payload,
                isDone : false,
            }
            state.todos.push(newTodo);
        },
        deleteTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo != action.payload)
        }
    }
});
