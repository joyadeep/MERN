import React from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <AppBar elevation={0} sx={{bgcolor:"green"}} position="sticky">
      <Toolbar>
        <Typography variant='h4' flexGrow={1}>Blog</Typography>
        <Box>
          <Button color="inherit" sx={{textTransform:'none'}}>
            <Link to="/login" >Login</Link>
          </Button>
          <Button color="inherit" sx={{textTransform:'none'}}>Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header