import {Typography} from '@mui/material'
import { useEffect } from 'react'
import Auth from './components/Auth'
import Header from './components/Header'
import Loading from './components/Loading'
import Notification from './components/Notification'
import BottomNav from './components/BottomNav'
import { Route, Routes } from 'react-router-dom'
import Map from './pages/Map'
import Home from './pages/Home'
import Layout from './Layout'
import Test from './pages/Test'
function App() {

  return (
   <>
   <Loading/>
   <Notification/>
   <Auth/>
   <Layout>
   <Routes>
    <Route path='/home' element={<Home/>}  />
    <Route path='/' element={<Test/>} />
    <Route path='/map' element={<Map/>}  />
   </Routes>
   </Layout>
   </>
  )
}

export default App
