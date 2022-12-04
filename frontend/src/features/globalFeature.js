import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    error:{status:false,message:'',variant:'danger'}
}

export const globalSlice=createSlice({
    name:'global',
    initialState,
    reducers:{
       
    }
})

export const {}=globalSlice.actions;
export default globalSlice.reducer;