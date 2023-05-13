import './TodoItem.css'

const TodoItem = ({todo, borrarTodo}) => {
  return (
    <li>
        <span> {todo} </span>
        <button onClick={ ()=> borrarTodo(todo)}> Eliminar </button>
    </li>
  )
}

export default TodoItem