import GithubIcon from '@/components/icons/github-icon';
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

      <div className='flex flex-col h-screen gap-6 pt-6'>
        <div className='container text-center text-gray-600 selection:bg-emerald-500 selection:text-white'>
          <h1 className='text-5xl font-black uppercase'>Todo App</h1>
          <p className='text-gray-400'>
            Another generic todo app made with{' '}
            <a href='https://nextjs.org/' target='_blank' className='underline text-emerald-500' rel='noreferrer'>
              NextJS
            </a>{' '}
            <span className='block text-xs'>(and tailwindcss jeje)</span>
          </p>
        </div>

        <main className='container max-w-xl text-gray-600 selection:bg-emerald-500 selection:text-white'>
          <TodoForm addTodo={addTodo} />
          <p className='mt-1 text-sm text-gray-400'>{uncompletedTodos} uncompleted tasks</p>
          <TodoList todos={todos} handleRemove={removeTodo} handleToggle={toggleTodo} />
        </main>

        <footer className='py-3 mt-auto bg-gray-600'>
          <div className='container grid text-white place-items-center'>
            <a
              href='https://github.com/yusborinchit?tab=repositories'
              target='_blank'
              className='flex items-center gap-1'
              rel='noreferrer'
            >
              <GithubIcon />
              <span>/yusborinchit</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
