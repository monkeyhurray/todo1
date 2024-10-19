import { useState } from 'react';
import uuid from 'react-uuid';
import { useMutationFn } from '../hooks/useMutationHook';
const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const { createTodo } = useMutationFn();

  const createBtn = () =>
    createTodo({ id: uuid(), content: inputValue, isDone: false });
  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={createBtn}>생성</button>
    </div>
  );
};

export default Input;
