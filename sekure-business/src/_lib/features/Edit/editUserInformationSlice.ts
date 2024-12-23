import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  editUserInfo: false,
  page: 1,
};

const editUserInformationSlice = createSlice({
  name: "editUserInfo",
  initialState,
  reducers: {
    setEditUserInfo: (state, action: PayloadAction<boolean>) => {
      state.editUserInfo = action.payload;
    },

    resetPage: (state) => {
      state.page = 1;
    },

    nextPage: (state) => {
      state.page += 1;
    },

    prevPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { setEditUserInfo, resetPage, nextPage, prevPage } =
  editUserInformationSlice.actions;

export default editUserInformationSlice.reducer;
