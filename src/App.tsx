import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Misc/Profile'
import Settings from './components/Misc/Settings'
import Help from './components/Misc/Help'
import Logout from './components/Pages/Logout'
import Inbox from './components/Misc/Inbox'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App