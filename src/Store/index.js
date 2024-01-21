import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./userData";
import selectedDataSlice from "./selectedData";
import showGraphSlice from "./showGraph";
import userAuthSlice from "./UserAuth";
import loadingSlice from "./loading";
import expenseDataSlice from "./expenseData";
import userExpenseDataSlice from "./userExpenseData";
import UserDetailDataSlice from "./userDetail";
const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    selectedData: selectedDataSlice.reducer,
    showGraph: showGraphSlice.reducer,
    isAuthenticated: userAuthSlice.reducer,
    loading: loadingSlice.reducer,
    expenseData: expenseDataSlice.reducer,
    userExpenseData: userExpenseDataSlice.reducer,
    userDetailData: UserDetailDataSlice.reducer,
  },
});
export default store;
