import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("about");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#about' onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>about us</a>
        <a href='#explore-product' onClick={()=>setMenu("products")} className={menu==="products"?"active":""}>products</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faSearch} />
        <div className="navbar-search-icon">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar