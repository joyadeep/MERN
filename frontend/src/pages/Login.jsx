import { Box, Button, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Box sx={{width:"100%",height:'100vh',bgcolor:'silver'}} display="flex" justifyContent={"center"} alignItems="center">
        <Paper elevation={0} sx={{p:1,width:{xs:"100%",sm:"100%",md:"60%",lg:"40%"}}}>
            <Typography align='center' variant='h4'>SignIn</Typography>
            {/* <Box sx={{mt:2,bgcolor:'red'}}> */}
                <form>
                  <Box sx={{px:2,py:1,display:'flex',flexDirection:'column',gap:2}}>
                  <Box display="flex" flexDirection={'column'}>
                   <InputLabel>Email</InputLabel>
                    <TextField type="email" maxWidth />
                    <Typography variant="caption">error</Typography>
                   </Box>
                   <Box display="flex" flexDirection={'column'}>
                   <InputLabel>Password</InputLabel>
                    <TextField type="password" maxWidth />
                    <Typography variant="caption">error</Typography>
                   </Box>
                   <Button type="submit" variant="contained" sx={{textTransform:'none',width:'fit-content',fontSize:"18px",mx:'auto'}} size="large" disableElevation>Login</Button>
                  </Box>
                </form>

            {/* </Box> */}

        </Paper>
    </Box>
  )
}

export default Login