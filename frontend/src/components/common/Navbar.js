import React from 'react'
import { useEffect } from 'react'

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
            <li><a className="nav-link" href="/index.html">Home</a></li>
            <li><a className="nav-link" href="/profiles.html">Profiles</a></li>
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
                <a href="/">My profile</a>
                <a href="/">login</a>
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