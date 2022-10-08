import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Posts from "./pages/Posts"
import Auth from './pages/Auth'
import Home from "./pages/Home"

function App() {

  return (
   <>
   <Header/>

   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/auth" element={<Auth/>}/>
      
   </Routes>
   </>
  )
}

export default App
