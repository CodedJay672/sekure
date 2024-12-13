import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionSummary } from "@/utils/types/types";

const initialState: TransactionSummary = {
  total_transaction: 0,
  transaction_pending: 0,
  transaction_success: 0,
  total_payments: 0,
  actifs_payments: 0,
  inactifs_payments: 0,
  total_collection: 0,
  collection_failed: 0,
  collection_successs: 0,
  wallet_xaf: 0,
  wallet_usa: 0,
  wallet_civ: 0,
  evolution_transactions: [
    {
      date: "",
      total: 0,
    },
  ],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    updateTransactionsData: (
      state,
      action: PayloadAction<TransactionSummary>
    ) => {
      //update the connexion data with the user data
      return { ...state, ...action.payload };
    },
  },
});

//export the action to update the connexion data when users sign in
export const { updateTransactionsData } = transactionsSlice.actions;

//export the reducer
export default transactionsSlice.reducer;
