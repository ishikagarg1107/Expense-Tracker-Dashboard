import { createSlice } from "@reduxjs/toolkit";
const UserDetailDataSlice = createSlice({
  name: "userData",
  initialState: {
    userDetailData: [],
  },
  reducers: {
    setUserDetailData(state, action) {
      state.userDetailData = action.payload;
    },
  },
});

export const UserDetailDataAction = UserDetailDataSlice.actions;
export default UserDetailDataSlice;
