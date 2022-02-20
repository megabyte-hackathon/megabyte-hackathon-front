import { configureStore } from "@reduxjs/toolkit";
import conditionSlice from "./condition-slice";
import careerSlice from "./career";

const store = configureStore({
  reducer: { career: careerSlice },
});

export default store;
