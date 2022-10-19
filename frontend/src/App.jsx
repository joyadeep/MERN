import {Typography} from '@mui/material'
import Auth from './components/Auth'
import Header from './components/Header'
import Loading from './components/Loading'
import Notification from './components/Notification'
function App() {

  return (
   <>
   <Loading/>
   <Notification/>
   <Auth/>
   <Header/>   
   </>
  )
}

export default App
