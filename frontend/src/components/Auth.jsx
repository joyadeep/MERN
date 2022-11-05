import { Button, Dialog, DialogContent, DialogTitle, InputLabel, TextField } from '@mui/material'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { closeAuth} from '../redux/user/userSlice'
// import GoogleLogin from './GoogleLogin'
import { login, register } from '../actions/userAction'

const Auth = () => {
    const [inputs,setInputs]=useState({
        name:'',
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
        {
            isLogin?login(inputs,dispatch):register(inputs,dispatch)
        }
       
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
                    <InputLabel required>Name</InputLabel>
                <TextField type={'text'} name="name" value={inputs.name} onChange={handleChange} size="small" sx={{mb:2}} fullWidth/>

                    </>
                }
                <InputLabel required>Email</InputLabel>
                <TextField type={'email'} name="email" value={inputs.email} onChange={handleChange} size="small" sx={{mb:2}} fullWidth/>

                <InputLabel required>Password</InputLabel>
                <TextField type={'password'} name="password" value={inputs.password} onChange={handleChange} size="small" sx={{mb:2}} fullWidth/>

                <Button type="submit" variant='contained' size='large' sx={{textTransform:'none',fontSize:16,letterSpacing:'-1px',width:'100%',mb:2}} disableElevation>{isLogin?"Login":"Register"}</Button>
                <Button variant='outlined' size='large' onClick={()=>setIsLogin(!isLogin)} sx={{textTransform:'none',fontSize:16,letterSpacing:'-1px',width:'100%'}}>{isLogin?"Register":"Login"}</Button>
            </form>
            {/* <GoogleLogin/> */}
        </DialogContent>
    </Dialog>
  )
}

export default Auth