import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTodoApi, patchTodoApi, deleteTodoApi } from '../api/todoApi';

export const useMutationFn = () => {
  const queryClient = useQueryClient();
  const { mutate: createTodo } = useMutation({
    mutationFn: postTodoApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const { mutate: auditTodo } = useMutation({
    mutationFn: patchTodoApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const { mutate: deleteTodo } = useMutation({
    mutationFn: deleteTodoApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  return { createTodo, auditTodo, deleteTodo };
};
