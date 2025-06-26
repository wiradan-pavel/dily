import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./location/locationSlice";
import productLikeReducer from "./product/productLikeSlice";

export const store = () =>
  configureStore({
    reducer: {
      location: locationReducer,
      productLike: productLikeReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
