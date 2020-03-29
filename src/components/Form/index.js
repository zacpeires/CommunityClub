import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../Icon'

const DarkBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(34, 34, 34);
    opacity: 0.7;
`

const FormContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Widget = styled.div`
    height: 250px;
    width: 250px;
    background: white;
    z-index: 5;
    width: 568px;
    border-radius: 12px;
    height: 681px;

`

const TitleAndCloseIconContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 24px;
    justify-content: center;
    position: relative;
    border-bottom: .5px solid #ebebeb;
`

const NavbarTextPrimary = styled.p`
  margin: 0 20px;
  color: black;
  font-size: 15px;
  font-weight: bolder;
`;


const UserStateWidget = () => {
    return (
        <FormContainer>
            <DarkBackground />
            <Widget>
                <TitleAndCloseIconContainer>
                    <CloseIcon />
                    <NavbarTextPrimary>
                        Sign up
                    </NavbarTextPrimary>
                </TitleAndCloseIconContainer>
            </Widget>
        </FormContainer>
    )
}

export default UserStateWidget