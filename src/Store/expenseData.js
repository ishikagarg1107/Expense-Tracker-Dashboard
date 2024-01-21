import { createSlice } from "@reduxjs/toolkit";
const expenseDataSlice = createSlice({
  name: "userData",
  initialState: {
    expenseData: [],
  },
  reducers: {
    setExpenseData(state, action) {
      state.expenseData = action.payload;
    },
  },
});

export const expenseDataAction = expenseDataSlice.actions;
export default expenseDataSlice;