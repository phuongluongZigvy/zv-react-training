import axios from "axios";
const URL = "http://localhost:9000";

export const authUser = (userForm) =>
  axios.post(`${URL}/login`, userForm).then((response) => response.data);
export const getUsers = (autInfo) =>
  axios.get(`${URL}/app/users`, autInfo).then((response) => response.data);
