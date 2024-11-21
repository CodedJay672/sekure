// _lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import connexionSlice from "../features/users/connexionSlice";
import authSlice from "../features/Auth/authSlice";
import transactionsSlice from "../features/transactions/transactionsSlice";
import cardsSlice from "../features/cards/cardSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    connexion: connexionSlice,
    auth: authSlice,
    transactions: transactionsSlice,
    cards: cardsSlice,
    users: usersSlice,
  },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
