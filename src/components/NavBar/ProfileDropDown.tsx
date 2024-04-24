import user from '../../../src/img/user.png';
import inbox from '../../../src/img/envelope.png';
import settings from '../../../src/img/settings.png';
import help from '../../../src/img/question.png';
import logout from '../../../src/img/log-out.png';
import { NavLink } from 'react-router-dom';
import './ProfileDropDown.css'

export type ProfileDropDown = {
  isToggled?: boolean,
  isLogged?: boolean,
  setLogged: React.Dispatch<boolean>
}

export default function ProfileDropDown({isToggled, isLogged, setLogged}: ProfileDropDown) {
  return (
    <div className="profile-dropdown" style={{display: (isToggled ? '' : 'none')}}>
      {isLogged ? <LoggedList setLogged={setLogged}/> : <NotLoggedList setLogged={setLogged}/>}
    </div>
  )
}

function LoggedList({setLogged}: ProfileDropDown) {
  return (
    <ul className="profile-list">
      <li className="profile-item"><NavLink to='/profile'><img loading={'eager'} src={user}/>Profile</NavLink></li>
      <li className="profile-item"><NavLink to='/inbox'><img loading={'eager'} src={inbox}/>Inbox</NavLink></li>
      <li className="profile-item"><NavLink to='/settings'><img loading={'eager'} src={settings}/>Settings</NavLink></li>
      <li className="profile-item"><NavLink to='/help'><img loading={'eager'} src={help}/>Help</NavLink></li>
      <li className="profile-item"><NavLink to='/logout' onClick={() => setLogged(false)}><img loading={'eager'} src={logout}/>Logout</NavLink></li>
    </ul>
  )
}

function NotLoggedList({setLogged}: ProfileDropDown) {
  return (
    <ul className="profile-list">
      <li className="profile-item"><a onClick={() => setLogged(true)}><img loading={'eager'} style={{transform: 'rotate(180deg)'}} src={logout}/>Login</a></li>
    </ul>
  )
}