export const AuthUser = (info) => {
  return {
    type: "AUTH_USER",
    payload: info,
  };
};

export const Logout = () => {
  return {
    type: "LOG_OUT",
  };
};



export const GetUsers = (users) => {
  return {
    type: "GET_USERS",
    payload: users
  };
};
