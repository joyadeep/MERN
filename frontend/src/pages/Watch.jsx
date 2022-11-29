import { ArrowBackIosNewRounded, ArrowBackRounded } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Watch = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{height:'100vh',bgcolor:'green'}}>
    <Button onClick={()=>navigate("/")} variant='text' startIcon={<ArrowBackRounded/>} size="large" sx={{position:'absolute',zIndex:"1",color:'white',textTransform:'none'}}>
    <Typography variant='body1'>Back</Typography>

    </Button>
    <video src='' controls width={'100%'} height="99.5%" />
    </Box>
  )
}

export default Watch