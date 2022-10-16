import React from 'react'
import { AppBar,Toolbar, Typography,Link, Stack } from '@mui/material'
import {Tour} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {login} from '../redux/authSlice'
const Header = () => {
  const logstatus=useSelector((state)=>state.auth.isLoggedIn)
  const dispatch=useDispatch()
  const guestLink=["home","posts","auth"]
  const userLink=["home","posts","add","profile"]
  
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(login());
      console.log("Dispatched in header")
    }
  },[localStorage])
  return (
    <>
    <AppBar elevation={0} sx={{bgcolor:'white',height:'10vh'}} position="static">
        <Toolbar>
            <Tour fontSize='large' sx={{color:"black"}}/>
            <Stack direction={'row'} columnGap={3} sx={{ml:"auto"}}>
              {
                logstatus?userLink.map((link,index)=>(
                  <Link key={index} component={NavLink} to={`/${link==="home"?"":link}`} sx={{textTransform:'capitalize',textDecoration:'none',color:'gray',":hover":{textDecoration:"underline",textUnderlineOffset:"10px"}}}><Typography>{link}</Typography></Link>
                )):guestLink.map((link,index)=>(
                  <Link key={index} component={NavLink} to={`/${link==="home"?"":link}`} sx={{textTransform:'capitalize',textDecoration:'none',color:'gray',":hover":{textDecoration:"underline",textUnderlineOffset:"10px"}}}><Typography>{link}</Typography></Link>
                ))
              }
            </Stack>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header