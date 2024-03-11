import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../storeUtils/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
