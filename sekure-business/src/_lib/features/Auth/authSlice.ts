import { NewUser } from "@/_validation/SignUp";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Company, signUpResponse } from "@/utils/types/SignupTypes";
import { PURGE } from "redux-persist";

export type AddUserData = {
  currentStep: {
    number: number;
  };
  newUserData: Partial<NewUser>;
  userObj: {
    user: Partial<User>;
    company: Partial<Company>;
  };
};

export const initialState: AddUserData = {
  currentStep: {
    number: 1,
  },
  newUserData: {},
  userObj: {
    user: {
      id: undefined,
      full_name: "",
      poste: "",
      date_birth: undefined,
      pourcentage_action: undefined,
      email: "",
      nationality: "",
      street: "",
      localisation: "",
      appartement: "",
      city: "",
      etat: "",
      zip: "",
      document1: "",
      document2: "",
      phone: "",
      active: undefined,
      updated_by: undefined,
      image: "",
      email_verified_at: undefined,
      step: "",
      created_at: undefined,
      updated_at: undefined,
    },
    company: {
      id: undefined,
      name: "",
      email: "",
      phone: "",
      address: "",
      prix_card: undefined,
      active: undefined,
      updated_by: undefined,
      sector_activity: "",
      description_company: "",
      created_company: "",
      registry_number: "",
      matricule_number: "",
      website_link: "",
      country: "",
      zip: "",
      state: "",
      city: "",
      street: "",
      localisation: "",
      appartement: "",
      pourcentage_action: undefined,
      certificat_constitution: "",
      proof_address: "",
      acte_constitutif: "",
      created_at: undefined,
      updated_at: undefined,
      pivot: { id_user: 0, id_company: 0 },
    },
  },
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

    updateUserObj: (state, action: PayloadAction<Partial<signUpResponse>>) => {
      state.userObj = {
        user: { ...state.userObj.user, ...action.payload.user },
        company: { ...state.userObj.company, ...action.payload.company },
      };
    },

    jumpStep: (state, action: PayloadAction<number>) => {
      //increment the current step
      state.currentStep.number = action.payload;
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
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state = initialState;
    });
  },
});

//export the action to update the connexion data when users sign in
export const { createUser, jumpStep, nextStep, previousStep, updateUserObj } =
  authSlice.actions;

//export the reducer
export default authSlice.reducer;
