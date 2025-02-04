import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/Todo/todo";
import AddForm from "./AddFrom";

export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    console.log(todos);

    const handleDelete = (id) => {
        console.log("deleted",id)
        dispatch(deleteTodo(id));
    }

    return(
        <div>
            <AddForm />
            <h2>Todo Redux</h2>
            <ul>
                { todos.map((todos) => 
                    <li key={todos.id}>
                        {todos.task}
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => handleDelete(todos.id)}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}