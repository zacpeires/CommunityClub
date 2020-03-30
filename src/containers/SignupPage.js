import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignupWidget from '../components/Form'
import { createUser } from '../api/user'

export default ({setShowSignupWidget, showSignupWidget}) => {
  const [receivePromotionalEmails, setReceivePromotionalEmails] = useState(
    true
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const createNewUser = (event) => {
    event.preventDefault();

    createUser(email, password, firstName, lastName, receivePromotionalEmails, DOB)
    setShowSignupWidget(false)
  }

  return (
    <SignupWidget createNewUser={createNewUser} firstName={firstName} setFirstName={setFirstName} setLastName={setLastName} setDOB={setDOB} setEmail={setEmail} setPassword={setPassword} 
    lastName={lastName} DOB={DOB} email={email} password={password} receivePromotionalEmails={receivePromotionalEmails} setReceivePromotionalEmails={setReceivePromotionalEmails} setShowSignupWidget={setShowSignupWidget} showSignupWidget={showSignupWidget} />
  )
};
