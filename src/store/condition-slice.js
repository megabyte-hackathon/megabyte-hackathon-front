import { createSlice } from "@reduxjs/toolkit";
const conditionState = { career: "new" };

const conditionSlice = createSlice({
  name: "condition",
  initialState: conditionState,
  reducers: {
    updateCondition(state, action) {
      state.career = action.payload;
    },
  },
});

export const conditionActions = conditionSlice.actions;

export default conditionSlice;
