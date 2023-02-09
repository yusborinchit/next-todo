import TodoForm from '@/components/todo-form';
import TodoList from '@/components/todo-list';
import useTodos from '@/hooks/use-todos';
import Head from 'next/head';

function Home() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { todo } = Object.fromEntries(formData);

    addTodo({ todo });
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container mt-6 text-center text-gray-600'>
        <h1 className='text-5xl font-black uppercase'>Todo App</h1>
        <p className='text-gray-400'>
          Another generic todo app made with{' '}
          <a href='https://nextjs.org/' className='underline text-emerald-500'>
            NextJS
          </a>
        </p>
      </div>

      <main className='container max-w-xl mt-6 text-gray-600'>
        <TodoForm handleSubmit={handleSubmit} />
        <TodoList todos={todos} handleRemove={removeTodo} handleToggle={toggleTodo} />
      </main>
    </>
  );
}

export default Home;
