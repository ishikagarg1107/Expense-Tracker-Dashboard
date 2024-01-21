import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
  name: "userData",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
