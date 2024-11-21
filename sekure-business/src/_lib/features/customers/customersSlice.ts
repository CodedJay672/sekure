import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customersinfo {
  customers: string[];
}

const initialState = {
  customers: [],
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer(state, action: PayloadAction<string>) {
      // state.customers.push(action.payload);
    },
    removeCustomer(state, action: PayloadAction<string>) {
      state.customers = state.customers.filter(
        (customer) => customer !== action.payload
      );
    },
  },
});
