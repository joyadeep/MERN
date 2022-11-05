import { startLoading, stopLoading,updateUser,closeAuth } from '../redux/user/userSlice'
import {setToast} from '../redux/global/globalSlice'
import axios from 'axios'
axios.defaults.withCredentials = true;
export const register=async(user,dispatch)=>{
    dispatch(startLoading())
  try {
    const result=await axios.post('http://localhost:5000/user/register',user)
    if(!result.success){
        dispatch(setToast({type:'error',message:result?.data?.message}))
    }
    console.log(result);
    dispatch(updateUser(result?.data?.data))
    dispatch(closeAuth())
    dispatch(setToast({type:'success',message:'user created successfully'}))
} catch (error) {
    console.log(error)
    dispatch(setToast({type:'error',message:error?.message}))
}
dispatch(stopLoading())
}

export const login=async(user,dispatch)=>{
    dispatch(startLoading())
  try {
    const result=await axios.post('http://localhost:5000/user/login',user)
    if(!result.success){
        dispatch(setToast({type:'error',message:result?.data?.message}))
    }
    const me=await axios.get('http://localhost:5000/user/me',{
        withCredentials:true
    });
    if(!me){
        dispatch(setToast({type:'error',message:me?.data?.message}))
    }
    console.log(me)
    dispatch(updateUser(me?.data?.data))
    dispatch(closeAuth())
    dispatch(setToast({type:'success',message:'Logged in successfully'}))
} catch (error) {
    console.log(error)
    dispatch(setToast({type:'error',message:error?.message}))
}
dispatch(stopLoading())
}

export const getUser=async(dispatch)=>{
    try {
        const result=await axios.get("http://localhost:5000/user/me")
        console.log("Result ",result)
        
    } catch (error) {
        console.log(error)
        
    }
}