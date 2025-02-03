import { useSelector } from "react-redux"

export default function Todo() {
    const todos = useSelector((state) => {
        state.todos;
    })
    console.log(todos);
    return(
        <div>
            <h2>Todo Redux</h2>
        </div>
    )
}