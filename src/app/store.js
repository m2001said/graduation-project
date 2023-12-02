import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "../features/screen/screenSlice";
import templateReducer from "../features/templateData/templateSlice";
export const store = configureStore({
  reducer: {
    screen: screenReducer,
    template: templateReducer,
  },
});
