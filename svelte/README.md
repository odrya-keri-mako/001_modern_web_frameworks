# <img src="../public/icons/svelte.svg" height="30"> Svelte

## Create project
```bash
npm create vite@9 svelte -- --template svelte-ts
```

## Install dependencies
```bash
npm install bootstrap@5.3.8 @fortawesome/fontawesome-free@7.3.1 svelte-spa-router@5
npm install -D @types/bootstrap@5
```

## Import dependencies
Modify `src/main.ts`
```ts
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
```

The content of `src/main.ts` should be:
```ts
import { mount } from 'svelte'
import App from './App.svelte'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'

import './app.css'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
```

## Project structure
```text
src/
├── components/
│   ├── header/
│   │   └── Header.svelte
│   └── footer/
│       └── Footer.svelte
│
├── pages/
│   ├── home/
│   │   └── Home.svelte
│   ├── page1/
│   │   └── Page1.svelte
│   └── page2/
│       └── Page2.svelte
│
├── state/
│   └── common.svelte.ts
│
├── routes.ts
├── app.css
├── App.svelte
└── main.ts
```

## Helper to create project structure
Create and run `<svelte folder>create-project-structure.bat`
```bat
@echo off

mkdir src\components\header 2>nul
mkdir src\components\footer 2>nul

mkdir src\pages\home 2>nul
mkdir src\pages\page1 2>nul
mkdir src\pages\page2 2>nul

mkdir src\state 2>nul

if not exist src\components\header\Header.svelte type nul > src\components\header\Header.svelte
if not exist src\components\footer\Footer.svelte type nul > src\components\footer\Footer.svelte

if not exist src\pages\home\Home.svelte type nul > src\pages\home\Home.svelte
if not exist src\pages\page1\Page1.svelte type nul > src\pages\page1\Page1.svelte
if not exist src\pages\page2\Page2.svelte type nul > src\pages\page2\Page2.svelte

if not exist src\state\common.svelte.ts type nul > src\state\common.svelte.ts

if not exist src\routes.ts type nul > src\routes.ts

echo Project structure created.
pause
```

### RUN batch file
```bash
./create-project-structure.bat
```

## Configure common state
Modify `src/state/common.svelte.ts`
```ts
export const common = $state({
  commonTitle: 'welcome!'
})
```

## Configure routing
This project uses hash-based routing: `#/`, `#/page1`, `#/page2`
Modify `src/routes.ts`
```ts
import Home from './pages/home/Home.svelte'
import Page1 from './pages/page1/Page1.svelte'
import Page2 from './pages/page2/Page2.svelte'

export const routes = {
  '/': Home,
  '/page1': Page1,
  '/page2': Page2,
  '*': Home
}
```

Modify `src/App.svelte`
```svelte
<script lang="ts">
  import Router from 'svelte-spa-router'

  import Header from './components/header/Header.svelte'
  import Footer from './components/footer/Footer.svelte'

  import { routes } from './routes'
</script>

<div class="page-container d-flex flex-column min-vh-100">
  <Header />
  <main class="position-relative flex-fill d-flex 
               flex-column justify-content-center">
    <Router {routes} />
  </main>
  <Footer />
</div>
```

Modify `src/app.css`
```css
.text-small-caps {
  font-variant: small-caps;
}
.fs-sm {
  font-size: 0.7rem;
}
```

## Create pages
Modify `src/pages/home/Home.svelte`
```svelte
<script lang="ts">
  import { common } from '../../state/common.svelte'

  const title = 'home'
</script>

<div class="container">

  <h1 class="text-center text-capitalize display-1">
    {common.commonTitle}
  </h1>

  <h4 class="page-title text-center text-capitalize display-4">
    <i class="fa-solid fa-house me-1"></i>
    <span>{title}</span>
  </h4>
</div>

<style>
  .page-title {
    color: red;
  }
</style>
```

Modify `src/pages/page1/Page1.svelte`
```svelte
<script lang="ts">
  import { common } from '../../state/common.svelte'

  const title = 'page 1'
</script>

<div class="container">
  <h1 class="text-center text-capitalize display-1">
    {common.commonTitle}
  </h1>

  <h4 class="page-title text-center text-capitalize display-4">
    <i class="fa-solid fa-face-smile me-1"></i>
    <span>{title}</span>
  </h4>
</div>

<style>
  .page-title {
    color: blue;
  }
</style>
```

Modify `src/pages/page2/Page2.svelte`
```svelte
<script lang="ts">
  import { common } from '../../state/common.svelte'

  const title = 'page 2'
</script>

<div class="container">
  <h1 class="text-center text-capitalize display-1">
    {common.commonTitle}
  </h1>

  <h4 class="page-title text-center text-capitalize display-4">
    <i class="fa-solid fa-globe me-1"></i>
    <span>{title}</span>
  </h4>
</div>

<style>
  .page-title {
    color: green;
  }
</style>
```

## Create components
Modify `src/components/footer/Footer.svelte`
```svelte
<script lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<div class="container-fluid bg-body-tertiary px-3 pt-2">
  <p class="fw-lighter fs-sm mb-2 text-center">
    &copy; Copyright&nbsp;&nbsp;2021-{currentYear}
    Keri Informatics, Makó
  </p>
</div>
```

Modify `src/components/header/Header.svelte`
```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import { Collapse } from 'bootstrap'

  const themeKey = '001_modern_web_frameworks_svelte_theme'

  let theme = $state<'dark' | 'light'>('dark')

  const applyTheme = () => {
    document.body.setAttribute('data-bs-theme', theme)
  }

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(themeKey, theme)
    applyTheme()
  }

  const closeNavbar = () => {
    const navbar = document.getElementById('navbar_content')
    if (navbar?.classList.contains('show')) {
      const collapse = Collapse.getOrCreateInstance(
        navbar,
        { toggle: false }
      )
      collapse.hide()
    }
  }

  const handleThemeClick = () => {
    toggleTheme()
    closeNavbar()
  }

  onMount(() => {
    const savedTheme = localStorage.getItem(themeKey)
    theme = savedTheme === 'light' ? 'light' : 'dark'
    applyTheme()
  })
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary sticky-top">

  <div class="container-fluid">

    <!-- Hamburger -->
    <button class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_content"
            aria-controls="navbar_content"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar content -->
    <div id="navbar_content"
         class="collapse navbar-collapse mt-3 mt-sm-0">

      <!-- LEFT -->
      <ul class="navbar-nav me-auto ms-0 ms-sm-3">

        <!-- Home -->
        <li class="nav-item mx-1">
          <a href="/"
             use:link
             use:active
             class="nav-link"
             onclick={closeNavbar}>
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-house me-1"></i>
              <span>Home</span>
            </span>
          </a>
        </li>

        <!-- Page1 -->
        <li class="nav-item mx-1">
          <a href="/page1"
             use:link
             use:active
             class="nav-link"
             onclick={closeNavbar}>
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-face-smile me-1"></i>
              <span>Page1</span>
            </span>
          </a>
        </li>

        <!-- Page2 -->
        <li class="nav-item mx-1">
          <a href="/page2"
             use:link
             use:active
             class="nav-link"
             onclick={closeNavbar}>
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-globe me-1"></i>
              <span>Page2</span>
            </span>
          </a>
        </li>
      </ul>

      <!-- RIGHT -->
      <ul class="navbar-nav ms-auto me-0 me-sm-3">

        <li class="nav-item mx-1">
          <button type="button"
                  class="nav-link border-0 bg-transparent"
                  onclick={handleThemeClick}
                  title="Change theme"
                  aria-label="Change theme">
            <i class="fa-solid me-1 me-sm-0"
               class:fa-sun={theme === 'dark'}
               class:fa-moon={theme === 'light'}></i>
            <span class="d-sm-none">
              Change theme
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  nav :global(.nav-link.active) {
    text-decoration: underline;
    pointer-events: none;
  }
</style>
```

## Start a local development server
```bash
npm run dev
```

## Check application
```bash
npm run check
```

## Build application
```bash
npm run build
```

## Preview build
```bash
npm run preview
```
