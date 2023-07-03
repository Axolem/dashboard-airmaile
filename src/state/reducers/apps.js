const initialState = [
  {
    id: 1,
    name: "App 1",
    plan: "Basic",
    usage: {
      used: 0,
      limit: 5000
    }
  },
  {
    id: 2,
    name: "App 2",
    plan: "Enterprise",
    usage: {
      used: 10_000,
      limit: 500_000
    }
  },
  {
    id: 3,
    name: "App 3",
    plan: "Basic",
    usage: {
      used: 300,
      limit: 5000
    }
  }
];

const appsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return state;

    case "ADD_APP":
      action.payload.todo.id = state.length + 1;
      action.payload.todo.plan = "Basic";
      action.payload.todo.usage = {
        used: 300 * state.length,
        limit: 5000 * state.length
      }

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

export default appsReducer;