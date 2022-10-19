import { Alert, Snackbar } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import {removeToast} from '../redux/global/globalSlice'
const Notification = () => {
    const toast=useSelector((state)=>state.global.toast)
    const dispatch=useDispatch()
  return (
    <Snackbar open={toast.isActive} 
    anchorOrigin={{
        vertical: "top",
        horizontal: "right"
     }}
    autoHideDuration={3000}
    onClose={()=>dispatch(removeToast())}
    >
        <Alert onClose={()=>dispatch(removeToast())} severity={toast.type} elevation={0} variant="filled">
    {toast.message}
  </Alert>
        </Snackbar>

  )
}

export default Notification