import styled from 'styled-components';

export const MidSizeTitleText = styled.p`
  margin: 0 20px;
  color: #484848;
  font-size: 15px;
  font-weight: bolder;
  ${props => {
      if (props.darker) {
          return`
            color: black;
          `
      }
  }}
`;