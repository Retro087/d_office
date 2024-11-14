import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice.js";
import authSlice from "./auth/authSlice.js";
import bookingSlice from "./booking/bookingSlice.js";
import profileSlice from "./profile/profileSlice.js";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice,
    booking: bookingSlice,
    profile: profileSlice,
  },
});
