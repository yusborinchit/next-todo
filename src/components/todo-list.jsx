import Todo from './todo';

function TodoList({ todos, handleRemove, handleToggle }) {
  return (
    <ul className='flex flex-col gap-2 my-6'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleToggle={handleToggle} handleRemove={handleRemove} />
      ))}
    </ul>
  );
}

export default TodoList;
