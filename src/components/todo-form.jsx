import { useRef } from 'react';
import Button from './button';

function TodoForm({ addTodo }) {
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = inputRef.current.value;
    addTodo({ todo });

    inputRef.current.value = '';
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();

    formRef.current.requestSubmit();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col gap-4 p-4 bg-white rounded-md shadow-md'>
      <textarea
        type='text'
        onKeyDown={handleKeyDown}
        ref={inputRef}
        name='todo'
        placeholder='e.g: Create a todo app!'
        className='flex-1 p-2 font-light border border-gray-400 rounded-md placeholder:text-gray-400 focus:outline-none'
      ></textarea>
      <Button>Add</Button>
    </form>
  );
}

export default TodoForm;
