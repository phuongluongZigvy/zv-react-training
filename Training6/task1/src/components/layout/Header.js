import React from "react";
import logo from "../../assets/logoZigvy.jpg";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Logout } from "../../actions/user";
import { useDispatch } from "react-redux";

const HeaderContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  & img {
    width: 5%;
  }
  & .ava {
    background-color: darkblue;
    width: 5%;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
    position: relative;
    & :hover .logout {
      display: block;
    }
  }
  & .logout {
    background-color: gray;
    width: 8rem;
    height: 8rem;
    position: absolute;
    right: 2rem;
    top: 4rem;
    line-height: 2rem;
    text-align: center;
    & div {
      width: 8rem;
      cursor: pointer;
    }
  }
`;

export default function Header() {
  const name = useSelector((state) => state.user.user.fullName);
  const dispatch = useDispatch();
  console.log(name);
  function handleLogout() {
    const action = Logout();
    dispatch(action);
  }
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="logo" />
        <div className="ava">{name}</div>
        <div className="logout">
          <div>{name}</div>
          <div onClick={handleLogout}>Log out</div>
        </div>
      </HeaderContainer>
    </>
  );
}
