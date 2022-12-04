import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TrendingSong from './TrendingSong'
import axios from 'axios'

const TrendingList = () => {
  const [trending,setTrending]=useState([])
  useEffect(()=>{
    const fetchList=async()=>{
      const res=await axios.get('https://shazam-core.p.rapidapi.com/v1/charts/world',{
        headers: {
          'X-RapidAPI-Key': '1b426aca48mshdbabd82da60fca4p1894bbjsndcf818f12ed0',
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
      })
      setTrending(res.data);
      console.log("trending list ",res)
    }
    fetchList()
  },[])
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mx:3,my:3}}>
        <Typography variant='h4' fontWeight={"bold"} letterSpacing="-1px">Trending Now</Typography>
        {/* <Link to={"#"}>see all</Link> */}
    </Box>
    {/* //music list */}
   <Box sx={{display:'flex',flexDirection:'column',rowGap:2,mx:3}}>
   {
    trending.map((item,index)=>(
        <TrendingSong key={index} index={index} item={item} />
    ))
   }
   </Box>

    </>
  )
}

export default TrendingList