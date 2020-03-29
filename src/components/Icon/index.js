import React from "react";
import styled from "styled-components";

const CloseIconContainer = styled.div`
  position: absolute;
  left: 24px;
`;

const CloseIcon = () => {
  return (
    <CloseIconContainer>
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

export default CloseIcon;
