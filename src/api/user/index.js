import React, { Component } from "react";
import * as firebase from 'firebase';
import { firestore } from '../../utils/firebase';


export const createUser = (email, password, firstName, lastName, receivePromotionalEmails, DOB) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      return firestore.collection("users")
        .doc(result.user.uid)
        .set({
          firstName: firstName,
          lastName: lastName,
          admin: false,
          email: email,
          joinDate: new Date(),
          purchases: [],
          userType: 'user',
          receivePromotionalEmails,
          DOB
        })
        .then(() => result.user.uid)
        .catch(err => console.log('err ', err));
    })
    .catch(error => console.log(`Error :: ${error.code} : ${error.message}`));
};

export const loginUser = (email, password) => {
return firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
  console.log(error)
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
};