// _lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import connexionReducer from "../features/users/connexionSlice";
import authSliceReducer from "../features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    connexion: connexionReducer,
    newUser: authSliceReducer,
  },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
