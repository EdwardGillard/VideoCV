import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { isAuthenticated, logout  } from '../../lib/auth'

function Navbar() {
  const [navScroll, setNavScroll] = React.useState('nav-transparent')

  useEffect(() => {
    function onScroll() {
      window.pageYOffset > 50 ? setNavScroll('nav-colored') : setNavScroll('nav-transparent')
    }
    window.addEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav id="nav" className={navScroll}>

        <div className='nav-left'>
          <img src={require('../../assets/videocv-logo.png')} alt="Logo" width="80" height="40"/>
          <ul className="nav-links">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/profiles">Profiles</Link></li>
            <li className="nav-link dropdown"> Categories
              <div className="dropdown-content">
                <Link to="/projects">Projects</Link>
                <Link to="/personal">Personal</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className='nav-right'>
          <ul className="nav-links">
            <li className="nav-link dropdown settings"> ⚙
              <div className="dropdown-content">
                {isAuthenticated() && <Link to="/dashboard">My profile</Link>}
                {!isAuthenticated() && <Link to="/login">login</Link>}
                {!isAuthenticated() && <Link to="/register">Register</Link>}
                {isAuthenticated() && <Link to='/' onClick={logout}></Link>}
              </div>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar