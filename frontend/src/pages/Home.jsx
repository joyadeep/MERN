import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box height={'90vh'} >
      <Box height={'80%'} sx={{background:`linear-gradient(
      rgba(0, 0, 0, 0.2), 
      rgba(0, 0, 0, 0.3)
    ),url('https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg')`,backgroundSize:'cover',height:'80%',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Typography variant="h3" color={'white'} fontFamily="Kaushan Script, cursive">
      Adventures are the best way to learn.
      </Typography>
      </Box>
      <Box height={'20%'} display="flex" alignItems={'center'} justifyContent="center" gap={3}>
        <Button variant='outlined' LinkComponent={Link} to="/auth" color='success' sx={{textTransform:'none'}}>Share your story</Button>
        <Button variant="contained" LinkComponent={Link} to="/posts" color="success" disableElevation sx={{textTransform:'none'}}>View others stories</Button>
      </Box>
    </Box>
  )
}

export default Home