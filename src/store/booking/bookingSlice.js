import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  events: [
    {
      title: "Дело",
      start: new Date(),
      end: new Date(moment().add(1, "hours")),
      style: { backgroundColor: "red", color: "white" },
    },
  ],
  waiting: false,
  err: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setEvents(state, action) {
      state.events = action.payload.events;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEvents } = bookingSlice.actions;

export default bookingSlice.reducer;
