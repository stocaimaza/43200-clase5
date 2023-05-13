import { useState, useEffect } from 'react'
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const guardadoTodos = localStorage.getItem("todos");
        if (guardadoTodos) {
            return JSON.parse(guardadoTodos);
        } else {
            return [];
        }
    })

    const [inputValue, setInputValue] = useState("");

    //Funciones para agregar tareas: 
    const agregarTodo = (texto) => {
        setTodos([...todos, texto])
        //Se recomienda utilizar el operador spread. 
    }

    //Funcion para eliminar tarea: 

    const borrarTodo = (todoABorrar) => {
        const actualizarTodos = todos.filter(todo => todo !== todoABorrar);
        setTodos(actualizarTodos);
    }

    //Funcion para manejar el evento del formulario. 

    const manejadorSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            agregarTodo(inputValue);
            setInputValue("");
        }
    }

    //Guardamos la lista de tareas en el localStorage: 

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    return (
        <div>
            <h1>Lista de tareas pendientes</h1>
            <form onSubmit={ manejadorSubmit }>
                <input type="text" placeholder='Agrega una tarea' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <button type='submit'> Agregar </button>
            </form>
            <ul>
                {
                    todos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            todo={todo}
                            borrarTodo={borrarTodo}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList