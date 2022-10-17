import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice' 

const Profile = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleClick=()=>{
    localStorage.removeItem("userId");
    dispatch(logout())
    navigate("/")
  }
  return (
    <Box px={4}>
    <Button type="button" variant="contained" onClick={handleClick} disableElevation sx={{textTransform:'none'}}>Logout</Button>
    </Box>
  )
}

export default Profile