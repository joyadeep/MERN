import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Posts from "./pages/Posts"
import Auth from './pages/Auth'
import Home from "./pages/Home"
import Add from "./pages/Add"
import Profile from "./pages/Profile"
import UpdatePost from "./pages/UpdatePost"

function App() {

  return (
   <>
   <Header/>

   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/post/:id" element={<UpdatePost/>}/>
      
   </Routes>
   </>
  )
}

export default App
