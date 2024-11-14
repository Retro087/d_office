import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  admin: false,
  waiting: false,
  err: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.waiting = true;

      state.profile = {
        login: action.payload.login,
        password: action.payload.password,
        photo:
          "https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png",
      };
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
export const { auth, logOut } = profileSlice.actions;

export default profileSlice.reducer;
