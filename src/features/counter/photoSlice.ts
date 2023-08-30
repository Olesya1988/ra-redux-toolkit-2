import { createSlice } from "@reduxjs/toolkit";

const data: [] = [];

export interface FactsState {
  value: [];
}

const initialState: FactsState = {
  value: [],
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    photoList: (state: any, action: any) => {
      state.value.unshift(action.payload);
    },
  },
});

export const { photoList } = photoSlice.actions;

export default photoSlice.reducer;
