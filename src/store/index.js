import { configureStore } from "@reduxjs/toolkit";
import conditionSlice from "./condition-slice";

const store = configureStore({
  reducer: { condition: conditionSlice.reducer },
});

export default store;
