import React, { useState } from "react";
import styled from "styled-components";
import { authUser } from "../api";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { AuthUser } from "../actions/user";

const LoginForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: 10% auto;
  & .col-1 {
    font-size: 1.5rem;
    justify-content: left;
  }
  & form {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  & form input {
    display: block;
    width: 80%;
    margin: 1rem 0;
    margin-left: 20%;
  }
  & .submit {
    width: 30%;
    justify-self: center;
  }
`;
export default function Login() {
  const [info, setInfo] = useState({ email: "", password: "" });
  const { email, password } = info;
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(info);
    console.log("submit");
    authUser(info).then((data) => {
      console.log('data login',data);
      if (data.token) {
        const user = jwt_decode(data.token);
        const action = AuthUser({ user: user, accessToken: data.token });
        dispatch(action);
      } else alert(data.error);
    });
  }

  function handleForm(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  return (
    <LoginForm>
      <div className="col-1">
        <p>Email</p>
        <p>Password</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          name="email"
          onChange={handleForm}
        />
        <input
          type="password"
          required
          value={password}
          name="password"
          onChange={handleForm}
        />
        <input className="submit" type="submit" />
      </form>
    </LoginForm>
  );
}
