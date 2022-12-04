import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import MusicPlayer from './pages/MusicPlayer'
function App() {

  return (
    <BrowserRouter>
    {/* <MusicPlayer/> */}
    {/* <audio src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/c7/b0/df/c7b0dfe8-e1dc-1bda-88b0-0dc9b67e1b1b/mzaf_15572490037611837314.plus.aac.ep.m4a" controls autoPlay /> */}
    <Home/>
    <MusicPlayer/>
    </BrowserRouter>
  )
}

export default App
