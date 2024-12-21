// _lib/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "@/safe-storage";
import connexionSlice from "../features/users/connexionSlice";
import authSlice from "../features/Auth/authSlice";
import editUserInformationSlice from "../features/Edit/editUserInformationSlice";

const rootReducer = combineReducers({
  connexion: connexionSlice,
  auth: authSlice,
  edit: editUserInformationSlice,
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

const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
