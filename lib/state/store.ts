import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./location/locationSlice";

export const store = () =>
  configureStore({
    reducer: {
      location: locationReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
