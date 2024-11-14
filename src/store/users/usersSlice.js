import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUsersAsync = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("");
  return response;
});

const initialState = {
  users: [
    {
      id: 1,
      login:
        "retr0rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsefesfesefrrrrrrrrrrrrrrrrrrrrr sefsefsef sef sef se f",
      name: "vova",
    },
    { id: 2, login: "retsfefsr0", name: "drgdrgdr" },
    { id: 2, login: "retsfefsr0", name: "drgdrgdr" },
    { id: 2, login: "retsfefsr0", name: "drgdrgdr" },
  ],
  waiting: false,
  err: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
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
export const {} = usersSlice.actions;

export default usersSlice.reducer;
