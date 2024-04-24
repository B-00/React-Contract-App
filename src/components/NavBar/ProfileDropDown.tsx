import user from '../../../src/img/user.png';
import inbox from '../../../src/img/envelope.png';
import settings from '../../../src/img/settings.png';
import help from '../../../src/img/question.png';
import logout from '../../../src/img/log-out.png';
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
      <li className="profile-item"><a href='/profile'><img src={user}/>Profile</a></li>
      <li className="profile-item"><a href='/inbox'><img src={inbox}/>Inbox</a></li>
      <li className="profile-item"><a href='/settings'><img src={settings}/>Settings</a></li>
      <li className="profile-item"><a href='/help'><img src={help}/>Help</a></li>
      <li className="profile-item"><a href='/logout' onClick={() => setLogged(false)}><img src={logout}/>Logout</a></li>
    </ul>
  )
}

function NotLoggedList({setLogged}: ProfileDropDown) {
  return (
    <ul className="profile-list">
      <li className="profile-item"><a onClick={() => setLogged(true)}><img style={{transform: 'rotate(180deg)'}}src={logout}/>Login</a></li>
    </ul>
  )
}