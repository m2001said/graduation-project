import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import screenReducer from "../features/screen/screenSlice";
import templateReducer from "../features/templateData/templateSlice";
import templateReducer2 from "../features/templateData/templateSlice2";
import templateReducer3 from "../features/templateData/templateSlice3";
import templateReducer4 from "../features/templateData/templateSlice4";
import templateReducer5 from "../features/templateData/templateSlice5";
import templateReducer6 from "../features/templateData/templateSlice6";
import templateReducer7 from "../features/templateData/templateSlice7";
import templateReducer10 from "../features/templateData/templateSlice10";
import templateReducer11 from "../features/templateData/templateSlice11";
import templateReducer14 from "../features/templateData/templateSlice14";
import templateReducer9 from "../features/templateData/templateSlice9";
import templateReducer13 from "../features/templateData/templateSlice13";

const rootReducer = combineReducers({
  screen: screenReducer,
  template1: templateReducer,
  template2: templateReducer2,
  template3: templateReducer3,
  template4: templateReducer4,
  template5: templateReducer5,
  template6: templateReducer6,
  template7: templateReducer7,
  template10: templateReducer10,
  template11: templateReducer11,
  template14: templateReducer14,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["screen", "template1", "template2", "template3", "template4", "template5", "template6", "template7", "template10", "template11", "template12"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export const store = configureStore({
  reducer: {
    screen: screenReducer,
    template1: templateReducer,
    template2: templateReducer2,
    template3: templateReducer3,
    template4: templateReducer4,
    template5: templateReducer5,
    template6: templateReducer6,
    template9: templateReducer9,
    template13: templateReducer13,
  },
});
