import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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

const NavbarTextPrimary = styled.p`
  margin: 0 20px;
  color: #484848;
  font-size: 15px;
  font-weight: bolder;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <CentredHorizontalContainer></CentredHorizontalContainer>
      <CentredHorizontalContainer>
          <NavbarTextPrimary>
              Register a business
          </NavbarTextPrimary>
          <Link to="/sign-up">
          <NavbarTextPrimary>
              Sign up
          </NavbarTextPrimary>
          </Link>
          <Link to="/log-in">
          <NavbarTextPrimary>
              Log in
          </NavbarTextPrimary>
          </Link>
      </CentredHorizontalContainer>
    </NavbarContainer>
  );
};

export default Navbar