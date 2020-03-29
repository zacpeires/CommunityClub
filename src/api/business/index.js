import React, { Component } from "react";
import * as firebase from "firebase";
import { firestore } from "../../utils/firebase";

export const createBusiness = (
  email,
  password,
  name,
  industry,
  website,
  contactNumber,
  city,
  area
) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      return firestore
        .collection("business")
        .doc(result.user.uid)
        .set({
          name: name,
          admin: false,
          email: email,
          joinDate: new Date(),
          userType: "business",
          industry: industry,
          website: website,
          peopleWhoHavePurchased: {}
        })
        .then(() => result.user.uid)
        .catch(err => console.log("err ", err));
    })
    .catch(error => console.log(`Error :: ${error.code} : ${error.message}`));
};

export const loginBusiness = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};
