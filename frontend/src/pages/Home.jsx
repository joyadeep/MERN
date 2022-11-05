import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Home = () => {
  const [first,setFirst]=useState(true);
  const refreshToken=async()=>{
   try {
    const data=await axios.get('http:localhost:5000/user/refresh',{withCredentials:true})
    return data
   } catch (error) {
    console.log(error)
   }
  }
useEffect(()=>{
  const interval=setInterval(() => {
  refreshToken().then(res=>console.log("new token:",res))
}, 1000*10);
return clearInterval(interval)
})
  return (
    <div>Home</div>
  )
}

export default Home