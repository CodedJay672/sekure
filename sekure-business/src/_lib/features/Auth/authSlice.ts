import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewUser, Stakeholder } from "@/utils/types/types";

export const initialState = {
  user: {} as NewUser,
  stakeholders: [] as Stakeholder[],
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

    //add the create stakeholder action
    createStakeholder: (state, action: PayloadAction<Stakeholder>) => {
      //update the state with the stakeholder data
      state.stakeholders.push(action.payload);
    },
  },
});

//export the action to update the connexion data when users sign in
export const { createUser, createStakeholder } = authSlice.actions;

//export the reducer
export default authSlice.reducer;
