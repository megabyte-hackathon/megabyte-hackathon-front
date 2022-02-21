import { configureStore } from "@reduxjs/toolkit";
import gpsSlice from "./gps";
import careerSlice from "./career";

const store = configureStore({
  reducer: { career: careerSlice, gps: gpsSlice },
});

export default store;
