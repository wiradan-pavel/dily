import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IItem } from "@/types/props";

type ProductLikeState = {
  like: IItem[];
};

const initialState: ProductLikeState = {
  like: [],
};

const productLikeSlice = createSlice({
  name: "productLike",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<IItem>) => {
      state.like.push(action.payload);
    },
    removeLike: (state, action: PayloadAction<number>) => {
      state.like = state.like.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addLike, removeLike } = productLikeSlice.actions;

export default productLikeSlice.reducer;
