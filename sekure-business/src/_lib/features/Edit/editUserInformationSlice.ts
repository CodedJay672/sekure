import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  editUserInfo: false,
};

const editUserInformationSlice = createSlice({
  name: "editUserInfo",
  initialState,
  reducers: {
    setEditUserInfo: (state, action: PayloadAction<boolean>) => {
      state.editUserInfo = action.payload;
    },
  },
});

export const { setEditUserInfo } = editUserInformationSlice.actions;

export default editUserInformationSlice.reducer;
