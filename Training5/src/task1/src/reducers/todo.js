const initialState = {
  Todos: [],
  isOpenForm: false,
  editTodo: {},
  filter: "all",
  renderList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS": {
      return {
        ...state,
        Todos: action.payload,
        renderList: action.payload,
      };
    }
    case "ADD_NEW_TODO": {
      const newList = [...state.Todos];
      newList.push(action.payload);
      console.log("newList", newList);
      return {
        ...state,
        Todos: newList,
        renderList: newList,
        filter: "all",
      };
    }
    case "SET_COMPLETED_TODO": {
      const newList = [...state.Todos].map((todo) => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            completed: !todo.completed,
          };
        else return todo;
      });
      console.log("newList", newList);
      return {
        ...state,
        Todos: newList,
        renderList: newList,
      };
    }
    case "DELETE_TODO": {
      const newList = [...state.Todos].filter((todo) => {
        return todo.id !== action.payload.id;
      });
      console.log("newList", newList);
      return {
        ...state,
        Todos: newList,
        renderList: newList,
      };
    }
    case "EDIT_TODO": {
      const newList = [...state.Todos].map((todo) => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            name: action.payload.name,
          };
        else return todo;
      });
      console.log("newList", newList);
      return {
        ...state,
        Todos: newList,
        renderList: newList,
        isOpenForm: false,
        editTodo: {},
      };
    }

    case "OPEN_FORM_EDIT": {
      return {
        ...state,
        isOpenForm: true,
        editTodo: action.payload,
      };
    }
    case "CLOSE_FORM_EDIT": {
      return {
        ...state,
        isOpenForm: false,
        editTodo: {},
      };
    }
    case "FILTER_COMPLETED": {
      const newList = [...state.Todos].filter((todo) => {
        return todo.completed === true;
      });
      return {
        ...state,
        filter: "completed",
        renderList: newList,
      };
    }
    case "FILTER_UNCOMPLETED": {
      const newList = [...state.Todos].filter((todo) => {
        return todo.completed === false;
      });
      return {
        ...state,
        filter: "uncompleted",
        renderList: newList,
      };
    }
    case "FILTER_ALL": {
      const newList = [...state.Todos];
      return {
        ...state,
        filter: "all",
        renderList: newList,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
