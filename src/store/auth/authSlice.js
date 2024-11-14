import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  waiting: false,
  err: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth(state, action) {
      state.waiting = true;

      state.isAuth = true;
      state.admin = false;
      state.waiting = false;
    },
    logOut(state) {
      state.isAuth = false;
      state.admin = false;
      state.profile = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { auth, logOut } = authSlice.actions;

export default authSlice.reducer;
