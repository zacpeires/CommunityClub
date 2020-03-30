import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LoginWidget } from '../components/Form'
import { loginUser } from '../api/user'

export default ({setShowLoginWidget, showLoginWidget}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const loginExistingUser = (event) => {
    event.preventDefault();

    loginUser(email, password)
    setShowLoginWidget(false)
  }

  return (
    <LoginWidget loginExistingUser={loginExistingUser} setEmail={setEmail} setPassword={setPassword} email={email} password={password} setShowLoginWidget={setShowLoginWidget} showLoginWidget={showLoginWidget} />
  )
};
