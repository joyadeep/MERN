import { Box, IconButton, Typography } from '@mui/material'
import {FavoriteBorderRounded, Person,Favorite} from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {SetIsplaying,CurrentSong} from '../features/musicFeature'
const TrendingSong = ({index,item}) => {
    const[isClicked,setIsClicked]=useState(false);
    const song={
      title:item.title,
      singer:item.subtitle,
      coverart:item.images.coverart,
      url:item.hub.actions
    }
  const dispatch=useDispatch();

  return (
    <>
    {
      console.log("song ",song)
    }
    <Box onClick={()=>dispatch(CurrentSong(song))} sx={{display:'flex',alignItems:'center',columnGap:4,cursor:'pointer','&:hover':{bgcolor:"#F1F1F1"}}}>
    <Typography variant='h4' fontWeight="bold" width="50px" letterSpacing={"-2px"} color="gray">{index+1}</Typography>
    <img src={item.images.coverart}  width={50} height={50} style={{borderRadius:"15px"}} />
    <Box>
        <Typography variant="body1" sx={{width:'250px',fontWeight:'bold'}}>{item.title}</Typography>
        <Typography variant="caption" >{item.subtitle}</Typography>
    </Box>
        {/* <Typography variant="h6">03:45</Typography> */}
        <Typography variant="body2" color="gray">876540098</Typography>
        <IconButton onClick={()=>setIsClicked(!isClicked)}>
           { isClicked?<Favorite/>:<FavoriteBorderRounded/>}
        </IconButton>
    </Box>
    </>
  )
}

export default TrendingSong