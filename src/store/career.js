import { createSlice } from "@reduxjs/toolkit";

const initialCareerState = {
  isNew: "",
  state: "",
  job: "",
  field: "",
  corporateType: "",
  workType: "",
};

const careerSlice = createSlice({
  name: "career",
  initialState: initialCareerState,
  reducers: {
    NEWCAREER(state) {
      state.isNew = "new";
    },
    OLDCAREER(state) {
      state.isNew = "old";
    },
  },
});
