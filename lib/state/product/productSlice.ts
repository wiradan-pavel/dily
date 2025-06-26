import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IItem } from "@/types/props";

type ProductState = {
  compare: IItem[];
  like: IItem[];
  cart: IItem[];
};

const initialState: ProductState = {
  compare: [],
  like: [],
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.like.push(action.payload);
    },
    removeLike: (state, action) => {
      state.like.pop(action.payload);
    },
  },
});

export const { addLike, removeLike } = productSlice.actions;

export default productSlice.reducer;
