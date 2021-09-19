const initialState = {
  accessToken: "",
  user: {},
  isAuth: false,
  isAdmin: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "AUTH_USER": {
    //   return {
    //     ...state
    //   }
    // }
    case "AUTH_USER_SUCCESS": {
      console.log("user", action.payload);
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        isAuth: true,
      };
    }
    case "AUTH_USER_FAILED":{
      return {
        ...state
      }
    }
    case "LOG_OUT": {
      return {
        initialState,
      };
    }
    case "GET_USERS": {
      return {
        ...state,
        isAdmin: true,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
