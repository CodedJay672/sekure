import { User } from "@/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//interface for the connexion data
export interface AuthUser {
  user: Partial<User>;
  currentStep: {
    number: number;
  };
  isLoggedIn: boolean;
}

export const initialState: AuthUser = {
  user: {
    id: undefined,
    full_name: "",
    poste: "",
    date_birth: "",
    pourcentage_action: undefined,
    email: "",
    nationality: "",
    street: "",
    localisation: "",
    city: "",
    etat: "",
    zip: "",
    document1: "",
    document2: "",
    phone: "",
    active: undefined,
    updated_by: undefined,
    image: "",
    email_verified_at: "",
    step: "",
    created_at: "",
    updated_at: "",
    roles: undefined,
    user_company: undefined,
  },
  currentStep: {
    number: 1,
  },
  isLoggedIn: false,
};

const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    updateConnexionData: (state, action: PayloadAction<Partial<User>>) => {
      //update the connexion data with the user data
      state.user = { ...state.user, ...action.payload };
    },

    updateProfilePicture: (state, action: PayloadAction<string>) => {
      //update the profile picture
      state.user!.image = action.payload;
    },

    //add the next step action
    nextStep: (state, action: PayloadAction<number>) => {
      if (action) {
        //update the current step with the payload
        state.currentStep.number = action.payload;
      } else {
        //increment the current step
        state.currentStep.number += 1;
      }
    },

    //add the logout action
    logout: (state) => {
      //clear the user data and set isLogged to false
      Object.assign(state, { user: {}, isLoggedIn: false });
    },
  },
});

//export the action to update the connexion data when users sign in
export const { updateConnexionData, updateProfilePicture, nextStep, logout } =
  connexionSlice.actions;

//export the reducer
export default connexionSlice.reducer;
