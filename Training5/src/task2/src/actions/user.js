export const AuthUser = (user) => {
  return {
    type: "AUTH_USER",
    payload: user,
  };
};


export const GetUsers = (users) => {
  return {
    type: "GET_USERS",
    payload: users
  };
};
