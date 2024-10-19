import React, { useState, useEffect } from 'react';
import { getTodoApi } from '../api/todoApi';
import { useQuery } from '@tanstack/react-query';
import Input from './Input';
import TodoList from './TodoList';
import { TodoType } from '../types/todoType';
const Home = () => {
  const {
    data: todo,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getTodoApi,
    queryKey: ['todos'],
  });
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    if (isError) {
      alert('오류 발생');
    } else {
      setTodos(todo);
    }
  }, [todo, isError]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <Input />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
