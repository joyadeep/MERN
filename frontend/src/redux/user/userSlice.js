import {createSlice} from '@reduxjs/toolkit'

const initialState=({
    isLoggedin:false,
    isAuthOpen:false,
    isLoading:false,
})

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state)=>{
            state.isLoggedin=true
        },
        logout:(state)=>{
            state.isLoggedin=false
        },
        openAuth:(state)=>{
            state.isAuthOpen=true;
        },
        closeAuth:(state)=>{
            state.isAuthOpen=false;
        },
        startLoading:(state)=>{
            state.isLoading=true
        },
        stopLoading:(state)=>{
            state.isLoading=false
        }

    }
})
export const{login,logout,openAuth,closeAuth,startLoading,stopLoading}=userSlice.actions;
export default userSlice.reducer;