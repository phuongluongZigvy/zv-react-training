const initialState = {
  todos: [],
  isOpenForm: false,
  editTodoId: null,
  isLoadCompleted: null,
  searchValue: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS": {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case "ADD_NEW_TODO": {
      const newList = [...state.todos];
      newList.push(action.payload);
      console.log("newList", newList);
      return {
        ...state,
        todos: newList,
        searchValue: '',
      };
    }
    case "SET_COMPLETED_TODO": {
      const newList = state.todos.map((todo) => {
        if (todo.id === action.payload)
          return {
            ...todo,
            completed: !todo.completed,
          };
        else return todo;
      });
      console.log("newList", newList);
      return {
        ...state,
        todos: newList,
      };
    }
    case "DELETE_TODO": {
      const newList = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      console.log("newList", newList);
      return {
        ...state,
        todos: newList,
      };
    }
    case "EDIT_TODO": {
      const newList = state.todos.map((todo) => {
        if (todo.id === state.editTodoId)
          return {
            ...todo,
            name: action.payload.name,
          };
        else return todo;
      });
      console.log("newList", newList);
      return {
        ...state,
        todos: newList,
        isOpenForm: false,
      };
    }

    case "OPEN_FORM_EDIT": {
      return {
        ...state,
        isOpenForm: true,
        editTodoId: action.payload,
      };
    }
    case "CLOSE_FORM_EDIT": {
      return {
        ...state,
        isOpenForm: false,
        editTodoId: null,
      };
    }
    case "FILTER_COMPLETED": {
      return {
        ...state,
        isLoadCompleted: true,
      };
    }
    case "FILTER_UNCOMPLETED": {
      return {
        ...state,
        isLoadCompleted: false,
      };
    }
    case "FILTER_ALL": {
      return {
        ...state,
        isLoadCompleted: null,
      };
    }
    case "SEARCH_TODO": {
      return {
        ...state,
        searchValue: action.payload
      }
    }
    default:
      return state;
  }
};

export default todoReducer;
