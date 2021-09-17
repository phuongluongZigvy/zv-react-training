import React from "react";
import logo from "../../assets/logoZigvy.jpg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  & img {
    width: 5%;
  }
  & .ava{
      background-color: darkblue;
      width: 5%;
      border-radius: 50%;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="logo" />
        
    <div className="ava">
        
    </div>
      </HeaderContainer>
    </>
  );
}
