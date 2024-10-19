import axios from 'axios';
import { TodoType } from '../types/todoType';

const getTodoApi = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return data;
};
const postTodoApi = async (newTodo: TodoType) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

const patchTodoApi = async (payload: TodoType) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${payload.id}`, {
    isDone: payload.isDone,
  });
};

const deleteTodoApi = async (id: string) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};

export { getTodoApi, postTodoApi, patchTodoApi, deleteTodoApi };
