import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-users">Profiles</Link></li>
            <li className="nav-link dropdown"> Categories
              <div className="dropdown-content">
                <a href="/">Projects</a>
                <a href="/">Personal</a>
              </div>
            </li>
          </ul>
        </div>

        <div className='nav-right'>
          <ul>
            <li className="nav-link dropdown settings"> ⚙
              <div className="dropdown-content">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
                <a href="/">logout</a>
              </div>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar