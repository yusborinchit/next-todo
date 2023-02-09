import TrashIcon from './icons/trash-icon';

function Todo({ todo: { id, todo, complete }, handleToggle, handleRemove }) {
  return (
    <li
      key={id}
      className='flex items-center gap-2 px-4 py-3 transition-transform duration-75 transform bg-white rounded-md shadow-md hover:-translate-y-1'
    >
      <input
        id={id}
        checked={complete}
        onChange={() => handleToggle({ id: id })}
        type='checkbox'
        className='min-w-[16px] min-h-[16px] transition-colors bg-gray-300 border border-gray-400 rounded-sm appearance-none cursor-pointer checked:bg-emerald-500 checked:border-emerald-500 peer relative before:absolute before:w-2 before:h-2 before:bg-transparent before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 checked:before:bg-white before:transition-colors before:delay-150'
      />
      <label htmlFor={id} className='flex-1 break-all cursor-text peer-checked:line-through'>
        {todo}
      </label>
      <button onClick={() => handleRemove({ id: id })} className='text-red-500 hover:text-red-600'>
        <TrashIcon />
      </button>
    </li>
  );
}

export default Todo;
