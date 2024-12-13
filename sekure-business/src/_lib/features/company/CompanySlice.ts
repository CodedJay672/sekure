"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { company } from "./validation";
import { BusinessNameDataType } from "@/_validation";

interface InitialSliceState {
  company: Partial<company>;
}

const initialState: InitialSliceState = {
  company: {
    id: undefined,
    name: "",
    email: "",
    phone: "",
    address: "",
    prix_card: null,
    active: false,
    updated_by: "",
    sector_activity: "",
    description_company: "",
    created_company: "",
    registry_number: "",
    matricule_number: "",
    website_link: "",
    country: "",
    zip: "",
    state: null,
    city: "",
    street: "",
    localisation: "",
    appartement: "",
    pourcentage_action: null,
    certificat_constitution: "",
    proof_address: "",
    acte_constitutif: "",
    created_at: "",
    updated_at: "",
  },
};

const CompanySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<BusinessNameDataType>) => {
      state.company = {
        ...state.company,
        ...action.payload,
      };
    },
  },
});

export const { setCompany } = CompanySlice.actions;

export default CompanySlice.reducer;
