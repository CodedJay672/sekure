import { User } from "@/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { users: User[] } = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
