import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Collapse } from 'bootstrap'

import styles from './Header.module.css'

function Header() {

  const themeKey = '001_modern_web_frameworks_react_theme'

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem(themeKey)
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme)
    localStorage.setItem(themeKey, theme)
  }, [theme])

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Close navbar
  const closeNavbar = () => {
    const navbar = document.getElementById('navbar_content')
    if (navbar?.classList.contains('show')) {
      const collapse = Collapse.getOrCreateInstance(navbar, { toggle: false })
      collapse.hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary sticky-top">

      <div className="container-fluid">

        {/* Hamburger */}
        <button className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar_content"
                aria-controls="navbar_content"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div id="navbar_content"
             className="collapse navbar-collapse mt-3 mt-sm-0">

          {/* LEFT */}
          <ul className="navbar-nav me-auto ms-0 ms-sm-3">

            {/* Home */}
            <li className="nav-item mx-1">
              <NavLink to="/"
                       end
                       className={({ isActive }) => `nav-link 
                                ${isActive ? styles.navItemActive : ''}`}
                       onClick={closeNavbar}>
                <span className="text-capitalize text-small-caps">
                  <i className="fa-solid fa-house me-1"></i>
                  <span>Home</span>
                </span>
              </NavLink>
            </li>

            {/* Page1 */}
            <li className="nav-item mx-1">
              <NavLink to="/page1"
                       className={({ isActive }) => `nav-link 
                                ${isActive ? styles.navItemActive : ''}`}
                       onClick={closeNavbar}>
                <span className="text-capitalize text-small-caps">
                  <i className="fa-solid fa-face-smile me-1"></i>
                  <span>Page1</span>
                </span>
              </NavLink>
            </li>

            {/* Page2 */}
            <li className="nav-item mx-1">
              <NavLink to="/page2"
                       className={({ isActive }) => `nav-link 
                                ${isActive ? styles.navItemActive : ''}`}
                       onClick={closeNavbar}>
                <span className="text-capitalize text-small-caps">
                  <i className="fa-solid fa-globe me-1"></i>
                  <span>Page2</span>
                </span>
              </NavLink>
            </li>
          </ul>

          {/* RIGHT */}
          <ul className="navbar-nav ms-auto me-0 me-sm-3">

            {/* Theme */}
            <li className="nav-item mx-1">
              <button type="button"
                      className="nav-link border-0 bg-transparent"
                      onClick={() => {
                        toggleTheme()
                        closeNavbar()
                      }}
                      title="Change theme"
                      aria-label="Change theme">
                <i className={`fa-solid me-1 me-sm-0 
                            ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                <span className="d-sm-none">
                  Change theme
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header