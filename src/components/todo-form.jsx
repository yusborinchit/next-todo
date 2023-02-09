function TodoForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 bg-white rounded-md shadow-md'>
      <textarea
        type='text'
        name='todo'
        placeholder='Add a todo...'
        className='flex-1 p-2 border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none'
      ></textarea>
      <button type='submit' className='px-6 py-1 text-lg font-bold text-white rounded-md bg-emerald-500'>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
