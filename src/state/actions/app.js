export const getTodos = () => ({
    type: "GET_TODOS",
  });
  
  export const addTodo = (data) => ({
    type: "ADD_TODO",
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