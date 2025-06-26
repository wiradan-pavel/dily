import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocationState = {
  value: string;
};

const initialState: LocationState = {
  value: "Москва",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeLocation } = locationSlice.actions;

export default locationSlice.reducer;
