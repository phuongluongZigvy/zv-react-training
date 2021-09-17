const initialState = {
  accessToken: '',
  user: {},
  isAuth: false,
  isAdmin: false,
  users:[],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER": {
      console.log('user',action.payload);
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        isAuth: true
      }
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
