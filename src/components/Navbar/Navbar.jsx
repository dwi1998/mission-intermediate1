import { useEffect, useRef } from "react";
import "./Navbar.css";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src="/chill-logo.png" alt="logo chill" />
        <ul>
            <li>Series</li>
            <li>Film</li>
            <li>Daftar Saya</li>
        </ul>
      </div>
       
      <div className="navbar-right">
        <img src="/search_icon.svg" alt="" className="icons" />
        <p>Children</p>
        <img src="/bell_icon.svg" alt="" className="icons" />

        <div className="navbar-profile">
            <img src="/Avatar.png" alt="" className="profile" />
            <img src="/KeyboardArrowDown.png" alt="avatar"  />

            <div className="dropdown">
              <p onClick={() => {logout()}}>Keluar</p>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
