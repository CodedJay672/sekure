import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewUser } from "@/utils/types/types";

export const initialState: NewUser | {} = {};

const authSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    //add the create user action
    createUser: (state, action: PayloadAction<any>) => {
      //update the state with the userData
      return { ...state, ...action.payload };
    },
  },
});

//export the action to update the connexion data when users sign in
export const { createUser } = authSlice.actions;

//export the reducer
export default authSlice.reducer;
