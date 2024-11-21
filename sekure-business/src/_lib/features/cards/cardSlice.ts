import { CardStats, DataResponse } from "@/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cards: <any>[],
  cardStat: {} as CardStats,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    getCards: (state, action: PayloadAction<DataResponse<any>>) => {
      state.cards = action.payload.data;
    },

    getCardStat: (state, action: PayloadAction<CardStats>) => {
      state.cardStat = action.payload;
    },
  },
});

export const { getCards, getCardStat } = cardsSlice.actions;

export default cardsSlice.reducer;
