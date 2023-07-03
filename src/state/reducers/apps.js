const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return state;

    case "ADD_TODO":
      return [...state, action.payload.todo];

    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            ...action.payload.data,
          };
        }

        return todo;
      });

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.todoId);

    default:
      return state;
  }
};

export default todosReducer;