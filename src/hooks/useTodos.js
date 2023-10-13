import { useReducer, useEffect } from 'react';
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  const storedData = localStorage.getItem('todos');
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return initialState; 
  }
}


export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo =(id) => {

        dispatch({
            type: '[TODO] REMOVE Todo',
            payload: id
        });
    }

    const handleToggleTodo =(id) => {

        dispatch({
            type: '[TODO] TOOGLE Todo',
            payload: id
        });
    }

    return {
            handleNewTodo,
            handleDeleteTodo,
            handleToggleTodo
    }
}
