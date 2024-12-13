// _lib/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "@/safe-storage";
import connexionSlice from "../features/users/connexionSlice";
import authSlice from "../features/Auth/authSlice";
import transactionsSlice from "../features/transactions/transactionsSlice";
import cardsSlice from "../features/cards/cardSlice";
import usersSlice from "../features/users/usersSlice";
import editUserInformationSlice from "../features/Edit/editUserInformationSlice";
import LoadingSlice from "../features/Loading/LoadingSlice";
import CustomerSlice from "../features/customers/customersSlice";
import CompanySlice from "../features/company/CompanySlice";

// export const store = configureStore({
//   reducer: {
//     connexion: connexionSlice,
//     auth: authSlice,
//     transactions: transactionsSlice,
//     cards: cardsSlice,
//     users: usersSlice,
//     edit: editUserInformationSlice,
//     loading: LoadingSlice,
//   },
// });

const rootReducer = combineReducers({
  connexion: connexionSlice,
  auth: authSlice,
  transactions: transactionsSlice,
  cards: cardsSlice,
  users: usersSlice,
  edit: editUserInformationSlice,
  loading: LoadingSlice,
  customer: CustomerSlice,
  company: CompanySlice,
});

const persistConfig = {
  key: "data",
  storage,
};

export const makeStore = () => {
  return configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
  });
};

// export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];

const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
