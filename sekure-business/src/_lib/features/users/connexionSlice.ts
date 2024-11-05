import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Roles {
  id: number;
  created_at: string;
  updated_at: string;
  name: "admin" | "user";
  active: 1 | 0;
  updated_by: string | "";
  pivot: {
    id_user: number;
    id_role: number;
  };
}

export interface User {
  id: number;
  full_name: string | "";
  poste: string | "";
  date_birth: string | "";
  pourcentage_action: number | 0;
  email: string | "";
  nationality: string | "";
  street: string | "";
  localisation: string | "";
  city: string | "";
  etat: string | "";
  zip: string | "";
  document1: File | null;
  document2: File | null;
  phone: string | "";
  active: 1 | 0;
  updated_by: string | "";
  image: string | "";
  email_verified_at: string | "";
  created_at: string | "";
  updated_at: string | "";
}

export interface AuthUser {
  user: User;
}

const initialState: AuthUser = {
  user: {} as User,
};

const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    updateConnexionData: (state, action: PayloadAction<AuthUser>) => {
      //update the connexion data with the user data
      const user = action.payload;

      Object.assign(state, { user });
    },
  },
});

//export the action to update the connexion data when users sign in
export const { updateConnexionData } = connexionSlice.actions;

//export the reducer
export default connexionSlice.reducer;
