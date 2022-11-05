import { createSlice } from "@reduxjs/toolkit";

const initialState=({
    toast:{isActive:false,type:'success',message:'no message'}
})

export const globalSlice=createSlice({
    name:"global",
    initialState,
    reducers:{
        setToast:(state,action)=>{
            state.toast.isActive=true;
            state.toast.type=action.payload.type;
            state.toast.message=action.payload.message;
        },
        removeToast:(state)=>{
            state.toast.isActive=false;
            
        }
    }
})
export const{setToast,removeToast}=globalSlice.actions
export default globalSlice.reducer;