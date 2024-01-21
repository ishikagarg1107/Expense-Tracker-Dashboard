import { createSlice } from "@reduxjs/toolkit";
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuthenticated: localStorage.getItem("isAuthenticated"),
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const userAuthAction = userAuthSlice.actions;
export default userAuthSlice;
