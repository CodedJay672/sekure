import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customersinfo {
  customers: string[];
}

const initialState = {
  customers: [],
};

const CustomersSlice = createSlice({
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

export const { addCustomer, removeCustomer } = CustomersSlice.actions;

export default CustomersSlice.reducer;
