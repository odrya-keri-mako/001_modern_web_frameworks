# <img src="../public/icons/react.svg" height="30"> React

## Create project
```bash
npm create vite@9 react -- --template react-ts
```

## Install dependencies
```bash
npm install bootstrap@5.3.8 @fortawesome/fontawesome-free@7.3.1 react-router@8
npm install -D @types/bootstrap@5
```

## Import dependencies
Modify `src/main.tsx`
```tsx
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
```

The content of `src/main.ts` should be:
```ts
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { CommonProvider } from './context/CommonContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CommonProvider>
        <App />
      </CommonProvider>
    </BrowserRouter>
  </StrictMode>,
)
```

## Project structure
```text
react/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   └── footer/
│   │       └── Footer.tsx
│   │
│   ├── context/
│   │   └── CommonContext.tsx
│   │
│   ├── pages/
│   │   ├── home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.css
│   │   ├── page1/
│   │   │   ├── Page1.tsx
│   │   │   └── Page1.module.css
│   │   └── page2/
│   │       ├── Page2.tsx
│   │       └── Page2.module.css
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── create-project-structure.bat
└── README.md
```

## Helper to create project structure
Create and run `<react folder>create-project-structure.bat`
```bat
@echo off

mkdir src\context 2>nul
if not exist src\context\CommonContext.tsx type nul > src\context\CommonContext.tsx

mkdir src\components\header 2>nul
mkdir src\components\footer 2>nul

mkdir src\pages\home 2>nul
mkdir src\pages\page1 2>nul
mkdir src\pages\page2 2>nul

if not exist src\components\header\Header.tsx type nul > src\components\header\Header.tsx
if not exist src\components\header\Header.module.css type nul > src\components\header\Header.module.css

if not exist src\components\footer\Footer.tsx type nul > src\components\footer\Footer.tsx

if not exist src\pages\home\Home.tsx type nul > src\pages\home\Home.tsx
if not exist src\pages\home\Home.module.css type nul > src\pages\home\Home.module.css

if not exist src\pages\page1\Page1.tsx type nul > src\pages\page1\Page1.tsx
if not exist src\pages\page1\Page1.module.css type nul > src\pages\page1\Page1.module.css

if not exist src\pages\page2\Page2.tsx type nul > src\pages\page2\Page2.tsx
if not exist src\pages\page2\Page2.module.css type nul > src\pages\page2\Page2.module.css

echo Project structure created.
pause
```

### RUN batch file
```bash
./create-project-structure.bat
```

Modify `src/main.tsx`
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { CommonProvider } from './context/CommonContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CommonProvider>
        <App />
      </CommonProvider>
    </BrowserRouter>
  </StrictMode>,
)
```

Modify `src/index.css`
```css
.text-small-caps {
  font-variant: small-caps;
}
.fs-sm {
  font-size: 0.7rem;
}
```

Modify `src/App.tsx`
```tsx
import { Navigate, Route, Routes } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import Page1 from './pages/page1/Page1'
import Page2 from './pages/page2/Page2'

function App() {
  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <Header />
      <main className="position-relative flex-fill d-flex 
                       flex-column justify-content-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
```

Modify `src/context/CommonContext.tsx`
```tsx
import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from 'react'

type CommonContextType = {
  commonTitle: string
  setCommonTitle: (title: string) => void
}

const CommonContext = createContext<CommonContextType | undefined>(undefined)

export function CommonProvider({ children }: { children: ReactNode }) {

  const [commonTitle, setCommonTitle] = useState('welcome!')

  return (
    <CommonContext
      value={{
        commonTitle,
        setCommonTitle
      }}
    >
      {children}
    </CommonContext>
  )
}

export function useCommon() {
  const context = useContext(CommonContext)

  if (!context) {
    throw new Error('useCommon must be used within CommonProvider')
  }

  return context
}
```

Modify `src/pages/home/Home.tsx`
```tsx
import { useCommon } from '../../context/CommonContext'
import styles from './Home.module.css'

function Home() {

  // Set common title
  const { commonTitle } = useCommon()

  // Set title
  const title = 'home'

  return (
    <div className="container">
      <h1 className="text-center text-capitalize display-1">
        {commonTitle}
      </h1>

      <h4 className={`${styles.pageTitle} text-center text-capitalize display-4`}>
        <i className="fa-solid fa-house me-1"></i>
        <span>{title}</span>
      </h4>
    </div>
  )
}

export default Home
```

Modify `src/pages/home/Home.module.css`
```css
/* Better class name in camelcase */
.pageTitle {
  color: red;
}
```

Modify `src/pages/page1/Page1.tsx`
```tsx
import { useCommon } from '../../context/CommonContext'
import styles from './Page1.module.css'

function Page1() {

  // Set common title
  const { commonTitle } = useCommon()

  // Set title
  const title = 'page 1'

  return (
    <div className="container">
      <h1 className="text-center text-capitalize display-1">
        {commonTitle}
      </h1>

      <h4 className={`${styles.pageTitle} text-center text-capitalize display-4`}>
        <i className="fa-solid fa-face-smile me-1"></i>
        <span>{title}</span>
      </h4>
    </div>
  )
}

export default Page1
```

Modify `src/pages/page1/Page1.module.css`
```css
.pageTitle {
  color: blue;
}
```

Modify `src/pages/page2/Page2.tsx`
```tsx
import { useCommon } from '../../context/CommonContext'
import styles from './Page2.module.css'

function Page2() {

  // Set common title
  const { commonTitle } = useCommon()

  // Set title
  const title = 'page 2'

  return (
    <div className="container">
      <h1 className="text-center text-capitalize display-1">
        {commonTitle}
      </h1>

      <h4 className={`${styles.pageTitle} text-center text-capitalize display-4`}>
        <i className="fa-solid fa-globe me-1"></i>
        <span>{title}</span>
      </h4>
    </div>
  )
}

export default Page2
```

Modify `src/pages/page2/Page2.module.css`
```css
.pageTitle {
  color: green;
}
```

Modify `src/components/header/Header.tsx`
```tsx
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
```

Modify `src/components/header/Header.module.css`
```css
.navItemActive {
  text-decoration: underline;
  pointer-events: none;
}
```

Modify `src/components/footer/Footer.tsx`
```tsx
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container-fluid bg-body-tertiary px-3 pt-2">
      <p className="fw-lighter fs-sm mb-2 text-center">
        &copy; Copyright&nbsp;&nbsp;2021-{currentYear}
        {' '}Keri Informatics, Makó
      </p>
    </div>
  )
}

export default Footer
```

## Start a local development server
```bash
npm run dev
```

## Build application
```bash
npm run build
```

## Preview build
```bash
npm run preview
```
