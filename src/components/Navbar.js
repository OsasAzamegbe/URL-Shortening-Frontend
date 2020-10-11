import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdGrain} from 'react-icons/md'
import Button from './Button'
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    const clickHandler = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}  >
                    <MdGrain className="navbar-icon"/>
                    Shorten
                </Link>
                <div className="menu-icon" onClick={clickHandler} >              
                    {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars"/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    { loggedIn ?
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                                Profile
                            </Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu} >
                                Login
                            </Link>
                        </li>
                    }
                    <li className="nav-btn">
                        <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu} >
                            {button ? 
                            <Button buttonStyle="btn--outline">SIGN UP</Button>
                            :
                            <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar