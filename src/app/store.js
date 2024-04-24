import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
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
import templateReducer8 from "../features/templateData/templateSlice8";
import templateReducer9 from "../features/templateData/templateSlice9";
import templateReducer10 from "../features/templateData/templateSlice10";
import templateReducer11 from "../features/templateData/templateSlice11";
import templateReducer12 from "../features/templateData/templateSlice12";
import templateReducer13 from "../features/templateData/templateSlice13";
import templateReducer14 from "../features/templateData/templateSlice14";
import templateReducer15 from "../features/templateData/templateSlice15";
import templateReducer16 from "../features/templateData/templateSlice16";
import templateReducer17 from "../features/templateData/templateSlice17";
import templateReducer18 from "../features/templateData/templateSlice18";

const rootReducer = combineReducers({
  auth: authReducer,
  screen: screenReducer,
  template1: templateReducer,
  template2: templateReducer2,
  template3: templateReducer3,
  template4: templateReducer4,
  template5: templateReducer5,
  template6: templateReducer6,
  template7: templateReducer7,
  template8: templateReducer8,
  template9: templateReducer9,
  template10: templateReducer10,
  template11: templateReducer11,
  template12: templateReducer12,
  template13: templateReducer13,
  template14: templateReducer14,
  template15: templateReducer15,
  template16: templateReducer16,
  template17: templateReducer17,
  template18: templateReducer18,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "screen",
    "template1",
    "template2",
    "template3",
    "template4",
    "template5",
    "template6",
    "template7",
    "template8",
    "template9",
    "template10",
    "template11",
    "template12",
    "template13",
    "template14",
    "template15",
    "template16",
    "template17",
    "template18",
    "auth",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false, // Disable serializable check middleware
  immutableCheck: false, // Disable immutable check middleware
});


export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
