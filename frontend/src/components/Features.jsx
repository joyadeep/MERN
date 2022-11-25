import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import React from 'react'
import Scale from '../assets/images/scale.jpg'
import {PlayArrowRounded,Info} from '@mui/icons-material'
import { useState } from 'react';

const Features = ({type}) => {
  const [category,setCategory]=useState();
  const handleChange=(event)=>{
    setCategory(event.target.value);
  }
  return (
    <>
    <Box sx={{height:"100vh",pl:4,display:'flex',flexDirection:'column',justifyContent:'space-around',background:` linear-gradient(
      rgba(0, 0, 0, 0.4), 
      rgba(0, 0, 0, 0.2)
    ), url(${Scale}) `,backgroundSize:'cover'}}>
    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:2,height:'50px'}}>
     {
      type && <>
       <Typography variant="h6" color="white">{type}</Typography>
      <Select sx={{bgcolor:'white',minWidth:'100px'}} autoWidth size='small' value={category} onChange={handleChange}>
        <MenuItem value="genre">Genre</MenuItem>
        <MenuItem value="action">Action</MenuItem>
        <MenuItem value="advanture">Advanture</MenuItem>
      </Select>
      </>
     }
    </Box>
    <Box>
    <Typography sx={{color:'white'}}>Movie title Image</Typography>
    <Typography sx={{color:"white"}}>movie description</Typography>
    <Box sx={{display:'flex',columnGap:2}}>
      <Button variant='contained' disableElevation sx={{textTransform:'none',bgcolor:'white',color:'inherit'}} startIcon={<PlayArrowRounded/>}>Play</Button>
      <Button variant='contained' disableElevation sx={{textTransform:'none',bgcolor:'gray'}} startIcon={<Info/>}>More Info</Button>
    </Box>
    </Box>
    </Box>
    </>
  )
}

export default Features;