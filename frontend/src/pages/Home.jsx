import { AppBar, Badge, Box, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import {Search,NotificationsRounded} from '@mui/icons-material'
import React from 'react'
import TrendingList from '../components/TrendingList'
const Home = () => {
  return (
    <>
    <AppBar elevation={0} sx={{bgcolor:'transparent'}} position="static">
        <Toolbar>
            <Typography variant="h4" color="#4D4B4B" sx={{letterSpacing:'-1px',fontWeight:'600',mr:'auto'}}>Home</Typography>
           <Box sx={{display:'flex',alignItems:'center',columnGap:3}}>
           <Badge color="primary" variant="dot">
                <NotificationsRounded style={{color:"#4D4B4B"}} />
            </Badge>
            <TextField size='small' placeholder='search' />
           </Box>
        </Toolbar>
    </AppBar>
    <TrendingList/>
    </>
  )
}

export default Home