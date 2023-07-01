import { Inter } from 'next/font/google'

import { useEffect, useState } from 'react'

import Title from '@/components/Title'
import Footer from '@/components/Footer'
import SearchTodo from '@/components/SearchTodo'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todos, setTodos] = useState(['get out of the bed', 'brush teeth', 'eat breakfast'])
  
  useEffect(() => {}, [todos])

  const searchTodo = (e) => {
      const list = document.querySelector('ul');

      const term = e.target.value.trim().toLowerCase();
      // add filtered class
      Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

      // remove filtered class
      Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
  }

  const addTodo = (e) => {
      e.preventDefault();
      const todo = e.target[0].value.trim().toLowerCase();

      if(todo.length) {
          setTodos([...todos, todo]);
          e.target.reset();
      }
  }

  const deleteTodo = (e) => {
      if(e.target.className.includes('trash')) {
          e.target.parentElement.remove();
      }
  }

  return (
    <>
      <Title title='Homepage' />

      <div className={styles.container}>
          <SearchTodo searchTodo={searchTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <AddTodo addTodo={addTodo}/>
      </div>

      <Footer />
    </>
  )
}
