import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const addTodo = ({ todo }) => {
    if (!todo) return setError('The todo field cannot be empty');

    const newTodo = {
      id: uuid(),
      todo,
      complete: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = ({ id }) => {
    const newTodos = todos.map((t) => {
      if (t.id !== id) return t;

      t.complete = !t.complete;
      return t;
    });
    setTodos(newTodos);
  };

  const removeTodo = ({ id }) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  return { todos, error, addTodo, removeTodo, toggleTodo };
}

export default useTodos;
