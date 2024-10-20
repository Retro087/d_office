import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUsersAsync = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("");
  return response;
});

const initialState = {
  profile: {},
  admin: false,
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

      state.profile = {
        login: action.payload.login,
        password: action.payload.password,
        photo:
          "https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png",
      };
      state.isAuth = true;
      state.admin = false;
      state.waiting = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.pending, (state) => {
      state.waiting = true;
    });
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      state.waiting = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsersAsync.rejected, (state, action) => {
      state.waiting = false;
      state.err = action.error;
      console.log(action.error);
    });
  },
});

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions;

export default authSlice.reducer;
