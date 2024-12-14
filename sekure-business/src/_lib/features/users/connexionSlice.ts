import { persistor } from "@/_lib/redux/store";
import { Company } from "@/utils/types/SignupTypes";
import { Role, User } from "@/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

//interface for the connexion data
export interface AuthUser {
  user: Partial<User>[];
  isLoggedIn: boolean;
}

export const initialState: AuthUser = {
  user: [
    {
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
  ],
  isLoggedIn: false,
};

const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    updateConnexionData: (state, action: PayloadAction<Partial<User>>) => {
      //update the connexion data with the user data
      state.user[0] = { ...state.user[0], ...action.payload };
      state.isLoggedIn = true;
    },

    updateProfilePicture: (state, action: PayloadAction<string>) => {
      //update the profile picture
      state.user[0].image = action.payload;
    },

    updateUserRole: (state, action: PayloadAction<Role>) => {
      //update the user role
      state.user[0] = { ...state.user[0], roles: [action.payload] };
    },

    updateUserCompany: produce((draft, action: PayloadAction<Company>) => {
      //update the user company
      draft.user[0].user_company = [action.payload];
    }),

    //add the logout action
    logout: (state) => {
      //reset the connexion data
      Object.assign(state, initialState);
      persistor.purge();
    },
  },
});

//export the action to update the connexion data when users sign in
export const {
  updateConnexionData,
  updateProfilePicture,
  updateUserRole,
  updateUserCompany,
  logout,
} = connexionSlice.actions;

//export the reducer
export default connexionSlice.reducer;
