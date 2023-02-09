import TrashIcon from './icons/trash-icon';

function TodoList({ todos, handleRemove, handleToggle }) {
  return (
    <ul className='flex flex-col gap-2 my-6'>
      {todos.map((t) => (
        <li key={t.id} className='flex items-center gap-2 px-4 py-3 bg-white rounded-md shadow-md'>
          <input
            id={t.id}
            checked={t.complete}
            onChange={() => handleToggle({ id: t.id })}
            type='checkbox'
            className='min-w-[16px] min-h-[16px] transition-colors bg-gray-300 border border-gray-400 rounded-sm appearance-none cursor-pointer checked:bg-emerald-500 checked:border-emerald-500 peer'
          />
          <label htmlFor={t.id} className='flex-1 break-all cursor-text peer-checked:line-through'>
            {t.todo}
          </label>
          <button onClick={() => handleRemove({ id: t.id })} className='text-red-500 hover:text-red-600'>
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
