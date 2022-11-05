import { Favorite, LocationOn, Restore } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const BottomNav = () => {
    const [value,setValue]=useState('recents')
  return (
    <Box sx={{
        position:'fixed',
        bottom:0,
        width:'100%'
    }}>
        <BottomNavigation
        value={value}
        onChange={(event,newval)=>{
            setValue(newval)
        }}
        >
         <BottomNavigationAction
         LinkComponent={Link} to="/"
        label="Recents"
        value="recents"
        icon={<Restore />}
      />
      <BottomNavigationAction
       LinkComponent={Link} to="/map"
        label="Favorites"
        value="favorites"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOn />}
      />
        </BottomNavigation>
    </Box>
  )
}

export default BottomNav