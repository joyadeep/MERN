import React from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography,Link, Stack } from '@mui/material'
import {Tour} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <AppBar elevation={0} sx={{bgcolor:'white'}} position="static">
        <Toolbar>
            <Tour fontSize='large' sx={{color:"black"}}/>
            <Stack direction={'row'} columnGap={3} sx={{ml:"auto"}}>
              <Link component={NavLink} to='/' sx={{textDecoration:'none',color:'gray',":hover":{textDecoration:"underline",textUnderlineOffset:"10px"}}}><Typography>Home</Typography></Link>
              <Link component={NavLink} to='/posts' sx={{textDecoration:'none',color:'gray',":hover":{textDecoration:"underline",textUnderlineOffset:"10px"}}}><Typography>Posts</Typography></Link>
              <Link component={NavLink} to='/auth' sx={{textDecoration:'none',color:'gray',":hover":{textDecoration:"underline",textUnderlineOffset:"10px"}}}><Typography>Auth</Typography></Link>
            </Stack>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header