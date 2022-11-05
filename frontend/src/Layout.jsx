import { Box } from '@mui/system'
import React from 'react'
import BottomNav from './components/BottomNav'
import Header from './components/Header'

const Layout = ({children}) => {
  return (
    <>
        <Box height="100vh">
        <Box height="10%"><Header/></Box>
        <Box height="85%" sx={{py:2}}>{children}</Box>
        <Box height="5%"><BottomNav/></Box>

        </Box>
    </>
  )
}

export default Layout