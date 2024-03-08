import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import avatar_logo from '../Assets/avatar_icon_logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import dropdown_icon from '../Assets/dropdown_icon.png'
import menu_icon from '../Assets/menu_icon.jpeg'
import nav_drop from '../Assets/nav1.png'
import { Link } from 'react-router-dom'
const Navbar=()=>{
    const [menu,setMenu]=useState("shop");
    const menuRef=useRef();
    const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');

    }
    return(
        <div className='navbar'>

            <div className='nav_logo'>
                <img src={avatar_logo} alt=""/>
                <p>AVATAR</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_drop} alt="" />
            <ul ref={menuRef}className="nav-menu">
                <li onClick={()=>{setMenu("Home")}}><Link  style={{textDecoration:'none'}}  to='/home'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                {/* <li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration:'none'}}  to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration:'none'}}  to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li> */}
                <li onClick={()=>{setMenu("system")}}><Link  style={{textDecoration:'none'}}  to='/system'>System</Link>{menu==="system"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("user")}}><Link  style={{textDecoration:'none'}}  to='/user'>User</Link>{menu==="user"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-menu'>
                {localStorage.getItem('auth-token')?
                <button  onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>:
                <Link to="/"><button>Login</button></Link>}
            
            <Link to="/menu"><img src={menu_icon} alt=""/></Link>    
            </div>

        </div>
    )
}

export default Navbar


