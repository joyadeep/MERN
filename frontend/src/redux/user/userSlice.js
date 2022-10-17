import {createSlice} from '@reduxjs/toolkit'

const initialState=({
    isLoggedin:false
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
        }

    }
})
export const{login,logout}=userSlice.actions;
export default userSlice.reducer;