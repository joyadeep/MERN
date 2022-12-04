import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isPlaying:false,
    nowPlaying:null,
    nextSong:null
}

export const musicSlice=createSlice({
    name:'music',
    initialState,
    reducers:{
        SetIsplaying:(state)=>{
            state.isPlaying=true;
        },
        UnsetIsPlaying:(state)=>{
            state.isPlaying=false;
        },
        CurrentSong:(state,action)=>{
            state.nowPlaying=action.payload;
        }
    }
})

export const {SetIsplaying,UnsetIsPlaying,CurrentSong}=musicSlice.actions;
export default musicSlice.reducer;