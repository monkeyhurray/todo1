import React from 'react';
import { TodoType } from '../types/todoType';
import { useMutationFn } from '../hooks/useMutationHook';
const TodoList = ({ todos }: { todos: TodoType[] }) => {
  const { auditTodo, deleteTodo } = useMutationFn();

  const auditBtn = (payload: TodoType, value: boolean) =>
    auditTodo({ ...payload, isDone: value });
  const deleteFh = (id: string) => deleteTodo(id);
  const todoItem = todos.filter((item) => item.isDone === false);
  const doneItem = todos.filter((item) => item.isDone === true);
  return (
    <div>
      <h1>Todo</h1>
      {todoItem.map((item: TodoType) => {
        return (
          <div key={item.id}>
            {item.content}
            <button onClick={() => auditBtn(item, true)}>수정</button>
            <button onClick={() => deleteFh(item.id)}>삭제</button>
          </div>
        );
      })}
      <h1>Done</h1>
      {doneItem.map((item: TodoType) => {
        return (
          <div key={item.id}>
            {item.content}
            <button onClick={() => auditBtn(item, false)}>수정</button>
            <button onClick={() => deleteFh(item.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
