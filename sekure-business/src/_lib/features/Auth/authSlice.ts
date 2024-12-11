import { NewUser } from "@/_validation/SignUp";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Company, signUpResponse } from "@/utils/types/SignupTypes";
import { persistor } from "@/_lib/redux/store";

export type AddUserData = {
  currentStep: {
    number: number;
  };
  newUserData: Partial<NewUser>;
  userObj: {
    user: Partial<User>;
    company: Partial<Company>;
  };
  dataLoaded: boolean;
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
      prix_card: "",
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
    },
  },
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

    updateUserObj: (state, action: PayloadAction<Partial<signUpResponse>>) => {
      state.userObj = {
        user: action.payload.user || {},
        company: action.payload.company || {},
      };
    },

    clearPersistor: () => {
      persistor.purge();
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
  updateUserObj,
  clearPersistor,
} = authSlice.actions;

//export the reducer
export default authSlice.reducer;
