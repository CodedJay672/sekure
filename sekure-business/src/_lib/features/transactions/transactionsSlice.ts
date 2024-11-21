import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionSummary } from "@/utils/types/types";

const initialState = {
  transactionSummary: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    updateTransactionsData: (
      state,
      action: PayloadAction<TransactionSummary | undefined>
    ) => {
      //update the connexion data with the user data
      const transactions = action.payload;

      Object.assign(state, { transactionSummary: transactions });
    },
  },
});

//export the action to update the connexion data when users sign in
export const { updateTransactionsData } = transactionsSlice.actions;

//export the reducer
export default transactionsSlice.reducer;
