import React from 'react'
import { useEffect } from 'react'

function Navbar() {
  const [navScroll, setNavScroll] = React.useState('nav-transparent')

  useEffect(() => {

  }, [])

  return (
    <>
      <nav id="nav" onScroll={handleScroll} className={navScroll}>
        <img src="./assets/logo.png" alt="Logo" width="80" height="80"/>
        <ul className="nav-links">
          <li><a className="nav-link" href="/index.html">Home</a></li>
          <li><a className="nav-link" href="/mission.html">The Mission</a></li>
          <li className="nav-link dropdown"> Services
            <div className="dropdown-content">
              <a href="/branding.html">Branding</a>
              <a href="/web-dev.html">Web Development</a>
              <a href="/else.html">Something Else</a>
              <a href="/marketing.html">Marketing</a>
            </div>
          </li>
          <li><a className="nav-link" href="/contact.html">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar