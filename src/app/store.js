import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../features/heroData/heroSlice";
import testimonialReducer from "../features/testimonialData/testimonialSlice";
import screenReducer from "../features/screen/screenSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    heroData: heroReducer,
    testimonialData: testimonialReducer,
  },
});
