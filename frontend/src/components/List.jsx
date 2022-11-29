import { Box, IconButton, Typography } from "@mui/material"
import ListItem from "./ListItem"
import { ArrowBackIosNewRounded,KeyboardArrowRightRounded, Rotate90DegreesCcwRounded } from "@mui/icons-material"
import { useState } from "react"

const List = () => {
   const[scrollValue,setScrollValue]=useState(0)
  return (
    <>
    <Box sx={{maxWidth:'100%',overflow:'hidden',mb:4}}>
      <Typography variant="h6">Continue to watch</Typography>
      <Box sx={{display:'flex',alignItems:'center'}}>
        <IconButton>

      <ArrowBackIosNewRounded/>
        </IconButton>
      <Box sx={{display:'flex',columnGap:1,overflowX:'scroll'}}>
        {[1,2,3,4,5,6,7,8].map(()=>(
          <ListItem/>
        ))}
      </Box>
      <IconButton>
      <ArrowBackIosNewRounded sx={{transform:"rotate(180deg)"}}/>
      </IconButton>

      </Box>
      
    </Box>
    </>
  )
}

export default List