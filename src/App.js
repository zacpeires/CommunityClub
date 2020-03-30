import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage, SignupPage } from './containers'
import Navbar from './components/Navbar';
import "babel-polyfill";
import firebase from "firebase";


function App() {
  const [hasCheckedForUser, setHasCheckedForUser] = useState(false);
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [showSignupWidget, setShowSignupWidget] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
        // use uid to getUser and to check for admin
      }
      setHasCheckedForUser(true);
    });
  });

  if (!hasCheckedForUser) {
    return <div />;
  }

  return (
    <div className="App">
      <Navbar uid={uid} setShowSignupWidget={setShowSignupWidget} showSignupWidget={showSignupWidget} />
      <SignupPage setShowSignupWidget={setShowSignupWidget} showSignupWidget={showSignupWidget}/>
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route exact path="/log-in" component={LoginPage} />
        <Route exact path="/sign-up" component={SignupPage} /> */}
        {/* <Route exact path="/register-business" component={BusinessRegistrationPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
