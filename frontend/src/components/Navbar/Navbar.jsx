import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>Mobile App</li>
            <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className='search'/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" className='basket-logo'/>
                <div className="dot"></div>
            </div>
            <button className="nav-button">Sign In</button>
        </div>
        
    </div>
  )
}

export default Navbar