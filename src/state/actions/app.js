export const getApps = () => ({
  type: "GET_APPS",
});

export const addApp = (data) => ({
  type: "ADD_APP",
  payload: {
    todo: data,
  },
});

export const updateTodo = (todoId, data) => ({
  type: "UPDATE_TODO",
  payload: {
    todoId: todoId,
    data,
  },
});

export const removeTodo = (todoId) => ({
  type: "REMOVE_TODO",
  payload: {
    todoId,
  },
});