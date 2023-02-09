import TodoForm from '@/components/todo-form';
import TodoList from '@/components/todo-list';
import useTodos from '@/hooks/use-todos';
import Head from 'next/head';
import { useMemo } from 'react';

function Home() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  const uncompletedTodos = useMemo(() => {
    return todos.filter((todo) => !todo.complete).length;
  }, [todos]);

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
          <a href='https://nextjs.org/' target='_blank' className='underline text-emerald-500' rel='noreferrer'>
            NextJS
          </a>{' '}
          <span className='text-xs'>(and tailwindcss jeje)</span>
        </p>
      </div>

      <main className='container max-w-xl mt-6 text-gray-600'>
        <TodoForm addTodo={addTodo} />
        <p className='mt-1 text-sm text-gray-400'>{uncompletedTodos} uncompleted tasks</p>
        <TodoList todos={todos} handleRemove={removeTodo} handleToggle={toggleTodo} />
      </main>
    </>
  );
}

export default Home;
