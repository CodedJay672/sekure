import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "@/utils/types/types";

export const initialState: AuthUser = {
  user: {},
  isLogged: false,
};

const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    updateConnexionData: (state, action: PayloadAction<AuthUser>) => {
      //update the connexion data with the user data
      const { user } = action.payload;

      Object.assign(state, { user, isLogged: true });
    },

    //add the logout action
    logout: (state) => {
      //clear the user data and set isLogged to false
      Object.assign(state, { user: {}, isLogged: false });
    },
  },
});

//export the action to update the connexion data when users sign in
export const { updateConnexionData, logout } = connexionSlice.actions;

//export the reducer
export default connexionSlice.reducer;
