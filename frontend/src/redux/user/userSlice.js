import {createSlice} from '@reduxjs/toolkit'


const initialState=({
    isAuthOpen:false,
    isLoading:false,
    // currentUser:{id:'',email:'',name:'',photoURL:'',google:false}
    currentUser:JSON.parse(localStorage.getItem('currentUser')) || null
})
export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:(state)=>{
            localStorage.removeItem('currentUser')
            state.currentUser=null;
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
        },
        updateUser:(state,action)=>{
            localStorage.setItem('currentUser',JSON.stringify(action.payload))
            state.currentUser=action.payload
         
        }

    }
})
export const{logout,openAuth,closeAuth,startLoading,stopLoading,updateUser}=userSlice.actions;
export default userSlice.reducer;