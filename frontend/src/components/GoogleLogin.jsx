import { Google } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import jwtDecode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {updateUser,closeAuth} from '../redux/user/userSlice'

const GoogleLogin = () => {}
//   const dispatch=useDispatch()
//   const handleResponse=(response)=>{
//     console.log(response);
//     const token=response.credential;
//     const decodeToken=jwtDecode(token);
//     const {sub:id,email,name,picture:photoURL}=decodeToken;
//     dispatch(updateUser({id,email,name,photoURL}))
//     dispatch(closeAuth())
    
//   }
//   const handleGoogleLogin=()=>{
//     try {
//       window.google.accounts.id.initialize({
//         client_id:'929890687294-ibq6ke7ag7birr6otejoqdvkc2mp7p9a.apps.googleusercontent.com',
//         callback:handleResponse
//       })
//       window.google.accounts.id.prompt((notification)=>{
//         if(notification.isNotDisplayed()){
//           console.log("error: cannot display account list")
//         }
//         if(notification.isSkippedMoment() || notification.isDismissedMoment() ){
//           console.log("Prompt dismissed")
//         }
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <Box sx={{textAlign:'center',mt:3}} >
//     <Typography variant='body1'>or</Typography>
//     <IconButton color='inherit' size='large' onClick={handleGoogleLogin}>
//         <Google fontSize='large'/>
//     </IconButton>

//     </Box>
//   )
// }

// export default GoogleLogin