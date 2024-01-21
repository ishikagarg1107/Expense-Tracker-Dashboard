import { createSlice } from "@reduxjs/toolkit";
const selectedDataSlice = createSlice({
    name:"selectedData",
    initialState :{
        selectedData : []
    },
    reducers:{
        setSelectedData(state,action) {
            state.selectedData = action.payload;
        }
    }
})
export const selectedDataAction = selectedDataSlice.actions;
export default selectedDataSlice;