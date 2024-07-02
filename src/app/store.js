import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import screenReducer from "../features/screen/screenSlice";
import templatesReducer from "../features/templates/templatesSlice";
import ownTemplateReducer from "../features/templateData/ownTemplateSlice";
import templateReducer from "../features/templateData/templateSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  screen: screenReducer,
  templates: templatesReducer,
  ownTemplate: ownTemplateReducer,
  template1: templateReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["screen", "template1", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
