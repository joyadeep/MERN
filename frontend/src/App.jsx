import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register';
import {Navigate} from 'react-router-dom'
import Watch from './pages/Watch';

function App() {
  const user=true;
  return (
<>
<Routes>
  <Route path='/' element={user?<Home/>:<Navigate to={"/register"}/>} />
  <Route path='/register' element={!user ? <Register/>: <Navigate to={"/"}/>} />
  {
    user && <>
    <Route path='/movies' element={<Home type="movie"/>} />
  <Route path='/series' element={<Home type="series"/>} />  
  <Route path='/watch' element={<Watch/>} />  
    </>
  }
  
</Routes>
</>
  )
}

export default App
