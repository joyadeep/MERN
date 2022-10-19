import { Backdrop, CircularProgress } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { stopLoading } from '../redux/user/userSlice'
const Loading = () => {
    const loading=useSelector((state)=>state.user.isLoading)
  const dispatch=useDispatch()
  return (
    <Backdrop  sx={{ color: '#fff', zIndex:1350 }}
    open={loading}
    onClick={()=>dispatch(stopLoading())}>
        <CircularProgress color="inherit"/>
    </Backdrop>
  )
}

export default Loading