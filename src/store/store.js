import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice.js";
import authSlice from "./auth/authSlice.js";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice,
  },
});
