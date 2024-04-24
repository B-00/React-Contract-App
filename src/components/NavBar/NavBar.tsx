import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import CirclePlus from "../../assets/upload-svgrepo-com.svg"
import ProfileIcon from "../../assets/profile-circle-svgrepo-com.svg"
import ProfileDropDown from '../NavBar/ProfileDropDown'
import './NavBar.css'

export default function NavBar() {
  const nav = useNavigate()

  const [toggle, setToggle] = useState<boolean>(false)

  const [logged, setLogged] = useState<boolean>(false)

  const forwardDropDownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!forwardDropDownRef.current?.contains(e.target as Node)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);
    
    return () =>{
      document.removeEventListener("mousedown", handler);
    }
  }, [])
  
  return (
    <nav>
      <div className="logo">
        <img src="https://phascorp.com/wp-content/uploads/2023/06/main-logo-3.png" alt="logo" height="70rem" />
      </div>
      <div className="nav-home" onClick={() => nav('/')}>
        Home
      </div>
      <div className="nav-contracts" onClick={() => nav('/contracts')}>
        Contracts
      </div>
      <div className="nav-cert" onClick={() => nav('/cert')}>
          <img width="45rem" height="45rem" src={CirclePlus} alt="Upload Certification" />
      </div>
      <div className="nav-profile" ref={forwardDropDownRef}>
        <div onClick={() => setToggle(!toggle)}>
          <img src={ProfileIcon} alt="Profile" width="45rem" height="45rem"/>
        </div>
        <ProfileDropDown isToggled={toggle} setLogged={setLogged} isLogged={logged}/>
      </div>
    </nav>
  )
}
