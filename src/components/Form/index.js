import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import CloseIcon, { TickIcon } from "../Icon";
import { MidSizeTitleText } from "../Typography";

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(34, 34, 34);
  transition: all 0.4s;
  opacity: 0.7;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  opacity: 0;
  transition: all 0.4s;
  ${props => {
    if (props.showSignupWidget) {
      return `
        display: flex;
        opacity: 1;
          `;
    } else if (props.showLoginWidget) {
      return `
      display: flex;
      opacity: 1;
      `
    }
  }}
  a {
    color: black;
    margin-bottom: 24px;
  }
`;

const Widget = styled.div`
  background: white;
  z-index: 5;
  width: 568px;
  border-radius: 12px;
`;

const TitleAndCloseIconContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 24px;
  justify-content: center;
  position: relative;
  border-bottom: 0.5px solid #ebebeb;
`;

const PrimaryBodyContainer = styled.div`
  padding: 24px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const FormInput = styled.input`
  height: 55px;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid rgb(176, 176, 176);
  width: 100%;
  color: rgb(113, 113, 113);
  font-size: 16px;
  ::placeholder {
    color: rgb(113, 113, 113);
    font-size: 16px;
  }
  ${props => {
    if (props.top) {
      return `
                border-radius: 8px 8px 0px 0px;
                border-bottom: 0px;
            `;
    } else if (props.bottom) {
      return `
                border-radius: 0px 0px 8px 8px;
            `;
    } else {
      return `
                border-radius: 8px;
            `;
    }
  }}
  ${props => {
    if (props.marginTop) {
      return `
                margin-top: 24px;
                margin-bottom: 24px
            `;
    } else if (props.marginBottom) {
      return `
                margin-bottom: 24px;
            `;
    }
  }}
`;

const SmallGreyText = styled.p`
  color: rgb(113, 113, 113);
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
`;

const HorizontalContainer = styled.div`
  display: flex;
  margin-top: 14px;
  margin-bottom: 14px;
`;

const TickBox = styled.div`
  display: inline-block;
  height: 24px;
  min-width: 24px;
  text-align: center;
  vertical-align: top;
  color: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 14px;
  border-color: rgb(176, 176, 176);
  cursor: pointer;
  ${props => {
    if (props.receivePromotionalEmails) {
      return `
            svg {
                color: unset;
            }
          `;
    } else {
      return `
            svg {
                color: black;
            }
          `;
    }
  }}
`;

const FullSizeButton = styled.button`
  margin: 24px 0;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  width: 100%;
  cursor: pointer;
  border: unset;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: white;
`;

const SignupWidget = ({ createNewUser, setShowSignupWidget, showSignupWidget, receivePromotionalEmails, setReceivePromotionalEmails,
firstName, setFirstName, lastName, setLastName, DOB, setDOB, email, setEmail, password, setPassword
}) => {
  return (
    <FormContainer showSignupWidget={showSignupWidget}>
      <DarkBackground/>
      <Widget>
        <TitleAndCloseIconContainer>
          <CloseIcon setShowSignupWidget={setShowSignupWidget} showSignupWidget={showSignupWidget}/>
          <MidSizeTitleText darker>Sign up</MidSizeTitleText>
        </TitleAndCloseIconContainer>
        <PrimaryBodyContainer>
          <form onSubmit={((event) => createNewUser(event))}>
            <FormInput top placeholder="First name" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            <FormInput bottom placeholder="Last name" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            <FormInput marginTop placeholder="Date of birth (dd/mm/yyyy)" name="DOB" value={DOB} onChange={(event) => setDOB(event.target.value)}/>
            <FormInput marginBottom placeholder="Email address" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <FormInput marginBottom placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <SmallGreyText>
              We’ll send you marketing promotions, special offers, inspiration
              and policy updates via email.
            </SmallGreyText>
            <HorizontalContainer>
              <TickBox
                receivePromotionalEmails={receivePromotionalEmails}
                onClick={() =>
                  setReceivePromotionalEmails(!receivePromotionalEmails)
                }
              >
                <TickIcon />
              </TickBox>
              <SmallGreyText>
                I don’t want to receive marketing messages from Community Club.
                I can also opt out of receiving these at any time in my account
                settings or via the link in the message.
              </SmallGreyText>
            </HorizontalContainer>
            <SmallGreyText>
              By selecting Agree and continue below, I agree to Airbnb’s Terms
              of Service, Payments Terms of Service, Privacy Policy, and
              Nondiscrimination Policy.
            </SmallGreyText>
            <FullSizeButton disabled={firstName.length && lastName.length && DOB.length && email.length && password.length && receivePromotionalEmails.length ? false : true}  type="submit">Agree and continue</FullSizeButton>
          </form>
        </PrimaryBodyContainer>
      </Widget>
    </FormContainer>
  );
};

export const LoginWidget = ({loginExistingUser, email, password, setEmail, setPassword, setShowLoginWidget, showLoginWidget }) => {
  return (
    <FormContainer showLoginWidget={showLoginWidget}>
 <DarkBackground/>
      <Widget>
        <TitleAndCloseIconContainer>
          <CloseIcon login setShowLoginWidget={setShowLoginWidget} showLoginWidget={showLoginWidget}/>
          <MidSizeTitleText darker>Log in</MidSizeTitleText>
        </TitleAndCloseIconContainer>
        <PrimaryBodyContainer>
        <form onSubmit={((event) => loginExistingUser(event))}>
            <FormInput top placeholder="Email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <FormInput bottom placeholder="Password" name="password" value={password} type="password" onChange={(event) => setPassword(event.target.value)}/>
            <FullSizeButton disabled={email.length && password.length ? false : true} type="submit">Log in</FullSizeButton>
        </form>
        </PrimaryBodyContainer>
        </Widget>
    </FormContainer>
  )
}

export default SignupWidget;
