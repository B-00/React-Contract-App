import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Misc/Profile'
import Settings from './components/Misc/Settings'
import Help from './components/Misc/Help'
import Logout from './components/Pages/Logout'
import Inbox from './components/Misc/Inbox'
import UploadCert from './components/NavBar/UploadCert'
import Contracts from './components/NavBar/Contracts'
import Footer from './components/Misc/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cert' element={<UploadCert/>}/>
        <Route path='/contracts' element={<Contracts/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
