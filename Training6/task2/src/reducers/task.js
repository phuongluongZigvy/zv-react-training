const initialState = {
  listTask: [],
  online: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newList = [...state.listTask];
      newList.push(action.payload);
      return {
        ...state,
        listTask: newList,
      };
    }
    // case "HANDLE_TASK": {
    //     console.log("hanlde task");
    //     return {
    //       ...state,
    //     };
    //   }
    case "READY_UPDATE": {
      const newList = [...state.listTask].map((task) => {
        if (task.id === action.payload.id)
          return {
            ...task,
            state: "ready",
          };
        else return task;
      });
      console.log("ready_action", newList);
      return {
        ...state,
        listTask: newList,
      };
    }
    case "SUBMITTING_UPDATE": {
      const newList = [...state.listTask].map((task) => {
        if (task.id === action.payload.id)
          return {
            ...task,
            state: "submitting",
          };
        else return task;
      });
      console.log("submit_action", newList);
      return {
        ...state,
        listTask: newList,
      };
    }
    case "SUBMITTING_SUCCESS": {
      const newList = [...state.listTask].map((task) => {
        if (task.id === action.payload.id)
          return {
            ...task,
            state: "success",
          };
        else return task;
      });
      console.log("success_action", newList);
      return {
        ...state,
        listTask: newList,
      };
    }
    case "SUBMITTING_ERROR": {
      const newList = [...state.listTask].map((task) => {
        if (task.id === action.payload.id)
          return {
            ...task,
            state: "error",
          };
        else return task;
      });
      console.log("error_action", newList);
      return {
        ...state,
        listTask: newList,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
