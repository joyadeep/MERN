import Header from "./components/Header"
import Login from "./pages/Login"
import {Routes,Route} from 'react-router-dom'
import Register from "./pages/Register"

function App() {
 
  return (
   <>
   <Header/>
   <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
   </Routes>
   </>
  )
}

export default App
