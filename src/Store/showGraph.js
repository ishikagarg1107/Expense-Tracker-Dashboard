import { createSlice } from "@reduxjs/toolkit";
const showGraphSlice = createSlice({
  name: "showGraph",
  initialState: {
    bar: true,
    line: false,
    pie: false,
  },
  reducers: {
    showBar(state) {
      state.bar = true;
      state.line = false;
      state.pie = false;
    },
    showLine(state) {
      state.bar = false;
      state.line = true;
      state.pie = false;
    },
    showPie(state) {
      state.bar = false;
      state.line = false;
      state.pie = true;
    },
  },
});
export const showGraphAction = showGraphSlice.actions;
export default showGraphSlice;