import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SideBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin-left: 3rem;
  margin-top: 2rem;
  & a:hover{
    color: deeppink;
  }
  & .nav_link {
    width: 100%;
    color: darkblue;
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 4rem;
  }
`;
export default function SideNav() {
  return (
    <SideBar>
      <Link className="nav_link" to="/app">
        Home
      </Link>
      <Link className="nav_link" to="/app/users">
        Users
      </Link>
      <Link className="nav_link" to="/app/my-info">
        My Info
      </Link>
    </SideBar>
  );
}
