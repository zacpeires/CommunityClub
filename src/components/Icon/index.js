import React from "react";
import styled from "styled-components";

const CloseIconContainer = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
`;

const TickIconContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CloseIcon = ({setShowSignupWidget, showSignupWidget, showLoginWidget, setShowLoginWidget, login}) => {
  return (
    <CloseIconContainer onClick={() => 
    { login ? setShowLoginWidget(!showLoginWidget) : setShowSignupWidget(!showSignupWidget)}
    
    }
    > 
      <svg
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          fill: "none",
          height: "16px",
          width: "16px",
          stroke: "currentcolor",
          strokeWidth: 4,
          overflow: "visible"
        }}
      >
        <path d="m6 6 20 20"></path>
        <path d="m26 6-20 20"></path>
      </svg>
    </CloseIconContainer>
  );
};


export const TickIcon = () => {
    return (
        <TickIconContainer>
        <svg aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: "block", fill: "black", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: 4, overflow: "visible"}}><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
        </TickIconContainer>
    )
}

export default CloseIcon;
