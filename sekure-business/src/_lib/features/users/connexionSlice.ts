import { User } from "@/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//interface for the connexion data
export interface AuthUser {
  user: User | null;
  isLoggedIn: boolean;
}

export const initialState: AuthUser = {
  user: null,
  isLoggedIn: false,
};

const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    updateConnexionData: (state, action: PayloadAction<User>) => {
      //update the connexion data with the user data
      const user = action.payload;

      Object.assign(state, { user, isLoggedIn: true });
    },

    updateProfilePicture: (state, action: PayloadAction<string>) => {
      //update the profile picture
      state.user!.image = action.payload;
    },

    //add the logout action
    logout: (state) => {
      //clear the user data and set isLogged to false
      Object.assign(state, { user: {}, isLogged: false });
    },
  },
});

//export the action to update the connexion data when users sign in
export const { updateConnexionData, updateProfilePicture, logout } =
  connexionSlice.actions;

//export the reducer
export default connexionSlice.reducer;
