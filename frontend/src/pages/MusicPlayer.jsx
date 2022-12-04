import React from 'react'
import {Box, IconButton, Slider, Stack, Typography} from '@mui/material'
import { Close, CloseRounded, Pause, PlayArrowRounded, SkipNextRounded, SkipPreviousRounded, VolumeDownRounded, VolumeUpRounded } from '@mui/icons-material'
import Town from '../assets/audio/town.mp3'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {UnsetIsPlaying} from '../features/musicFeature'
const MusicPlayer = () => {
  const[isPlaying,setIsPlaying]=useState(false);
  const audioRef=useRef();
  const dispatch=useDispatch();
  const stored=useSelector((state)=>state.music.nowPlaying);
  useEffect(()=>{
//change volume
// console.log("stored ",stored)
  },[])
  const handlePlayPause=()=>{
    setIsPlaying(!isPlaying);
    isPlaying?audioRef.current.pause():audioRef.current.play()
  }
  const handleVolume=(e)=>{
    audioRef.current.volume=e.target.value/100
  }
  return (
    <>
    {
      console.log('storred',stored)
    }
    <audio src={stored?.url[1].uri} controls autoplay />
    <Box sx={{bgcolor:'gray',height:'150px',width:'100%',position:'fixed',bottom:0}}>
      <Box sx={{width:'100%',display:'flex',flexDirection:'row-reverse'}}>
      <IconButton onClick={()=>dispatch(UnsetIsPlaying())}>
        <CloseRounded sx={{color:'red'}} fontSize="large"/>
      </IconButton>
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>

      </Box>

    </Box>
    </>
  )
}

export default MusicPlayer