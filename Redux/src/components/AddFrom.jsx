import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todo";

export default function AddForm() {
    const [task, Settask] = useState("");
    const dispatch = useDispatch(); 
    
    const submitHandler = ((evt) => {
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    });
    
    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => Settask(e.target.value)} />
                <button>Add task</button>
            </form>
        </>
    )
}