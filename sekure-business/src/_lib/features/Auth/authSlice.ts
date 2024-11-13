import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewUser, User } from "@/utils/types/types";

export const initialState = {
  user: {} as NewUser,
};

const authSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    //add the create user action
    createUser: (state, action: PayloadAction<NewUser>) => {
      //update the state with the userData
      state.user = action.payload;
    },
  },
});

//export the action to update the connexion data when users sign in
export const { createUser } = authSlice.actions;

//export the reducer
export default authSlice.reducer;
