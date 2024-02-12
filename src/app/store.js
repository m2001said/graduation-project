import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "../features/screen/screenSlice";
import templateReducer from "../features/templateData/templateSlice";
import templateReducer2 from "../features/templateData/templateSlice2";
import templateReducer3 from "../features/templateData/templateSlice3";
import templateReducer4 from "../features/templateData/templateSlice4";
import templateReducer5 from "../features/templateData/templateSlice5";
import templateReducer6 from "../features/templateData/templateSlice6";
import templateReducer10 from "../features/templateData/templateSlice10";
import templateReducer14 from "../features/templateData/templateSlice14";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    template1: templateReducer,
    template2: templateReducer2,
    template3: templateReducer3,
    template4: templateReducer4,
    template5: templateReducer5,
    template6: templateReducer6,
    template10: templateReducer10,
    template14: templateReducer14,
  },
});
