import { createSlice } from "@reduxjs/toolkit";
const userExpenseDataSlice = createSlice({
  name: "userData",
  initialState: {
    userExpenseData: [],
  },
  reducers: {
    setUserExpenseData(state, action) {
      state.userExpenseData = action.payload;
    },
  },
});

export const userExpenseDataAction = userExpenseDataSlice.actions;
export default userExpenseDataSlice;
