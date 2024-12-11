// src/features/userActions.ts

import { localstorageData } from "@/_validation/SignUp";
import { createAction } from "@reduxjs/toolkit";
import { AddUserData } from "./authSlice";

export const readFromLocalStorage = createAction("user/readFromLocalStorage");
export const writeToLocalStorage = createAction<AddUserData>(
  "user/writeToLocalStorage"
);

// Implement these functions in your component or service layer
const readFromLocalStorageAction = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return {
      type: "user/readFromLocalStorage",
      payload: JSON.parse(user),
    };
  }
};

const writeToLocalStorageAction = (user: localstorageData) => {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: "user/writeToLocalStorage",
    payload: user,
  };
};
