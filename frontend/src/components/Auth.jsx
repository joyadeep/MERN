import { Button, Dialog, DialogContent, DialogTitle, InputLabel, TextField } from '@mui/material'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { closeAuth,startLoading,stopLoading } from '../redux/user/userSlice'
import {setToast} from '../redux/global/globalSlice'
import GoogleLogin from './GoogleLogin'

const Auth = () => {
    const [inputs,setInputs]=useState({
        username:'',
        email:'',
        password:''
    })
    const [isLogin,setIsLogin]=useState(true)
    const AuthStatus=useSelector((state)=>state.user.isAuthOpen)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(startLoading())
        setTimeout(() => {
            dispatch(stopLoading())
        }, 3000);
        dispatch(setToast({type:"error",message:"Form submitted successfully"}))

        console.log(inputs);
    }
  return (
    <Dialog open={AuthStatus} onClose={()=>dispatch(closeAuth())} >
        <DialogTitle variant='h4' fontWeight={'bold'} align='center' letterSpacing={'-2px'}>
                {isLogin?"Login":"Register"}
        </DialogTitle>
        <DialogContent>
            <form onSubmit={handleSubmit}>
                {
                    !isLogin && <>
                    <InputLabel required>Username</InputLabel>
                <TextField type={'text'} name="username" value={inputs.username} onChange={handleChange} size="small" sx={{mb:2}} fullWidth/>

                    </>
                }
                <InputLabel required>Email</InputLabel>
                <TextField type={'email'} name="email" value={inputs.email} onChange={handleChange} size="small" sx={{mb:2}} fullWidth/>

                <InputLabel required>Password</InputLabel>
                <TextField type={'password'} name="password" value={inputs.password} onChange={handleChange} size="small" sx={{mb:2}} fullWidth/>

                <Button type="submit" variant='contained' size='large' sx={{textTransform:'none',fontSize:16,letterSpacing:'-1px',width:'100%',mb:2}} disableElevation>{isLogin?"Login":"Register"}</Button>
                <Button variant='outlined' size='large' onClick={()=>setIsLogin(!isLogin)} sx={{textTransform:'none',fontSize:16,letterSpacing:'-1px',width:'100%'}}>{isLogin?"Register":"Login"}</Button>
            </form>
            <GoogleLogin/>
        </DialogContent>
    </Dialog>
  )
}

export default Auth