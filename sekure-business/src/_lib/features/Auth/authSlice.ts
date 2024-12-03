import { localstorageData, NewUser } from "@/_validation/SignUp";
import { defaultData } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { writeToLocalStorage } from "./authAction";

type AddUserData = {
  currentStep: {
    number: number;
  };
  newUserData: localstorageData;
  dataLoaded: boolean;
};

export const initialState: AddUserData = {
  currentStep: {
    number: 1,
  },
  newUserData: defaultData,
  dataLoaded: false,
};

const authSlice = createSlice({
  name: "AuthContext",
  initialState,
  reducers: {
    //add the create user action
    createUser: (state, action: PayloadAction<Partial<NewUser>>) => {
      //update the state with the userData
      state.newUserData = { ...state.newUserData, ...action.payload };
    },

    readUserFromLocalStorage: (
      state,
      action: PayloadAction<Partial<localstorageData>>
    ) => {
      state.newUserData = { ...state.newUserData, ...action.payload };
    },

    resetLocalStorage: (state) => {
      state.newUserData = defaultData;
      writeToLocalStorage(state.newUserData);
    },

    //loadData action
    loadData: (state) => {
      //set the dataLoaded to true
      state.dataLoaded = true;
    },

    //add the next step action
    nextStep: (state) => {
      //increment the current step
      state.currentStep.number += 1;
    },

    //add the previous step action
    previousStep: (state) => {
      //decrement the current step
      state.currentStep.number -= 1;
    },
  },
});

//export the action to update the connexion data when users sign in
export const {
  createUser,
  nextStep,
  previousStep,
  loadData,
  readUserFromLocalStorage,
  resetLocalStorage,
} = authSlice.actions;

//export the reducer
export default authSlice.reducer;
