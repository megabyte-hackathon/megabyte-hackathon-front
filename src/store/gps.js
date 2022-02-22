import { createSlice } from "@reduxjs/toolkit";
const initialGpsState = { gps: [36.064, 127.501] };

const gpsSlice = createSlice({
  name: "gps",
  initialState: initialGpsState,
  reducers: {
    GPSSET(state, action) {
      state.gps = action.payload;
    },
  },
});

export const gpsActions = gpsSlice.actions;

export default gpsSlice.reducer;
