import { User } from "@/_validation/SignIn";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { users: User[] } = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = [...state.users, ...action.payload];
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
