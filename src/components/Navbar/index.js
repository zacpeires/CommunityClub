import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { MidSizeTitleText } from '../Typography';

const NavbarContainer = styled.nav`
  height: 70px;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0 1px 0 #ebebeb;
  border-bottom: .5px solid #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  a {
    text-decoration: none;
  }
`;

const CentredHorizontalContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = ({setShowSignupWidget, showSignupWidget, showLoginWidget, setShowLoginWidget}) => {
  return (
    <NavbarContainer>
      <CentredHorizontalContainer></CentredHorizontalContainer>
      <CentredHorizontalContainer>
          <MidSizeTitleText>
              Register a business
          </MidSizeTitleText>
          <Link to="/sign-up">
          <MidSizeTitleText onClick={() => setShowSignupWidget(!showSignupWidget)}>
              Sign up
          </MidSizeTitleText>
          </Link>
          <Link to="/log-in">
          <MidSizeTitleText onClick={() => setShowLoginWidget(!showLoginWidget)}>
              Log in
          </MidSizeTitleText>
          </Link>
      </CentredHorizontalContainer>
    </NavbarContainer>
  );
};

export default Navbar