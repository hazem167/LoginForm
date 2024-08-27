import { configureStore } from "@reduxjs/toolkit";
import LoginApiSliceReducer from "../redux/LoginApiSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth", // Key for the persisted data in storage
  storage,
  whitelist: ["token"], // Only persist the token
};
const persistedLoginApiSliceReducer = persistReducer(
  persistConfig,
  LoginApiSliceReducer
);
export const store = configureStore({
  reducer: {
    LoginApi: persistedLoginApiSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
