# <img src="../public/icons/vue.svg" height="30"> Vue

## Create project
```bash
npm create vue@3
```

## Project options
- Project name:  
  `vue`
- Use TypeScript:  
  `Yes`
- Features to include in project:  
  `Router (SPA development)`
- Experimental features:  
  `none`
- Skip all example code:  
  `Yes`

## Run
```bash
cd vue
npm install
npm run dev
```

## Project start structure
```text
vue/
├── public/
│   └── favicon.svg
├── src/
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig...
└── vite.config.ts
```

- `main.ts` → application entry point
- `App.vue` → root component
- `router/index.ts` → route configuration

## Install dependencies
```bash
npm install bootstrap@5.3.8 @fortawesome/fontawesome-free@7.3.1
npm install -D @types/bootstrap@5
```

Add to `src/main.ts`
```ts
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
```

## Project structure
```text
src/
├── components/
│   ├── header/
│   │   └── Header.vue
│   └── footer/
│       └── Footer.vue
│
├── composables/
│   └── useCommon.ts
│
├── pages/
│   ├── home/
│   │   └── Home.vue
│   ├── page1/
│   │   └── Page1.vue
│   └── page2/
│       └── Page2.vue
│
├── router/
│   └── index.ts
│
├── App.vue
├── index.css
└── main.ts
```

## Helper to create project structure
Create and run `<vue folder>create-project-structure.bat`
```bat
@echo off

mkdir src\components\header 2>nul
mkdir src\components\footer 2>nul
mkdir src\composables 2>nul

mkdir src\pages\home 2>nul
mkdir src\pages\page1 2>nul
mkdir src\pages\page2 2>nul

if not exist src\components\header\Header.vue type nul > src\components\header\Header.vue
if not exist src\components\footer\Footer.vue type nul > src\components\footer\Footer.vue

if not exist src\composables\useCommon.ts type nul > src\composables\useCommon.ts

if not exist src\pages\home\Home.vue type nul > src\pages\home\Home.vue
if not exist src\pages\page1\Page1.vue type nul > src\pages\page1\Page1.vue
if not exist src\pages\page2\Page2.vue type nul > src\pages\page2\Page2.vue

if not exist src\index.css type nul > src\index.css

echo Project structure created.
pause
```

### RUN batch file
```bash
./create-project-structure.bat
```

Modify `src/composables/useCommon.ts`
```ts
import { ref } from 'vue'

const commonTitle = ref('welcome!')

export function useCommon() {
  return {
    commonTitle
  }
}
```

Modify `src/router/index.ts`
```ts
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home/Home.vue'
import Page1 from '../pages/page1/Page1.vue'
import Page2 from '../pages/page2/Page2.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
```

Modify `src/App.vue`
```vue
<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <div class="page-container d-flex flex-column min-vh-100">
    <Header />
    <main class="position-relative flex-fill d-flex 
                 flex-column justify-content-center">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
```

Modify `src/pages/home/Home.vue`
```vue
<script setup lang="ts">
import { useCommon } from '../../composables/useCommon'

const { commonTitle } = useCommon()

const title = 'home'
</script>

<template>
  <div class="container">

    <h1 class="text-center text-capitalize display-1">
      {{ commonTitle }}
    </h1>

    <h4 class="page-title text-center text-capitalize display-4">
      <i class="fa-solid fa-house me-1"></i>
      <span>{{ title }}</span>
    </h4>

  </div>
</template>

<style scoped>
.page-title {
  color: red;
}
</style>
```

Modify `src/pages/page1/Page1.vue`
```vue
<script setup lang="ts">
import { useCommon } from '../../composables/useCommon'

const { commonTitle } = useCommon()

const title = 'page 1'
</script>

<template>
  <div class="container">

    <h1 class="text-center text-capitalize display-1">
      {{ commonTitle }}
    </h1>

    <h4 class="page-title text-center text-capitalize display-4">
      <i class="fa-solid fa-face-smile me-1"></i>
      <span>{{ title }}</span>
    </h4>

  </div>
</template>

<style scoped>
.page-title {
  color: blue;
}
</style>
```

Modify `src/pages/page2/Page2.vue`
```vue
<script setup lang="ts">
import { useCommon } from '../../composables/useCommon'

const { commonTitle } = useCommon()

const title = 'page 2'
</script>

<template>
  <div class="container">

    <h1 class="text-center text-capitalize display-1">
      {{ commonTitle }}
    </h1>

    <h4 class="page-title text-center text-capitalize display-4">
      <i class="fa-solid fa-globe me-1"></i>
      <span>{{ title }}</span>
    </h4>

  </div>
</template>

<style scoped>
.page-title {
  color: green;
}
</style>
```

Modify `src/components/footer/Footer.vue`
```vue
<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="container-fluid bg-body-tertiary px-3 pt-2">
    <p class="fw-lighter fs-sm mb-2 text-center">
      &copy; Copyright&nbsp;&nbsp;2021-{{ currentYear }}
      Keri Informatics, Makó
    </p>
  </div>
</template>
```

Modify `src/components/header/Header.vue`
```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Collapse } from 'bootstrap'

const themeKey = '001_modern_web_frameworks_vue_theme'

const savedTheme = localStorage.getItem(themeKey)

const theme = ref<'dark' | 'light'>(
  savedTheme === 'light' ? 'light' : 'dark'
)

// Apply theme
const applyTheme = () => {
  document.body.setAttribute('data-bs-theme', theme.value)
}

// Toggle theme
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem(themeKey, theme.value)
  applyTheme()
}

// Close mobile navbar
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

// Theme button click
const handleThemeClick = () => {
  toggleTheme()
  closeNavbar()
}

// Component mounted
onMounted(() => {
  applyTheme()
})
</script>

<template>
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
            <RouterLink to="/"
                        class="nav-link"
                        exact-active-class="active"
                        @click="closeNavbar">
              <span class="text-capitalize text-small-caps">
                <i class="fa-solid fa-house me-1"></i>
                <span>Home</span>
              </span>
            </RouterLink>
          </li>

          <!-- Page1 -->
          <li class="nav-item mx-1">
            <RouterLink to="/page1"
                        class="nav-link"
                        exact-active-class="active"
                        @click="closeNavbar">
              <span class="text-capitalize text-small-caps">
                <i class="fa-solid fa-face-smile me-1"></i>
                <span>Page1</span>
              </span>
            </RouterLink>
          </li>

          <!-- Page2 -->
          <li class="nav-item mx-1">
            <RouterLink to="/page2"
                        class="nav-link"
                        exact-active-class="active"
                        @click="closeNavbar">
              <span class="text-capitalize text-small-caps">
                <i class="fa-solid fa-globe me-1"></i>
                <span>Page2</span>
              </span>
            </RouterLink>
          </li>
        </ul>

        <!-- RIGHT -->
        <ul class="navbar-nav ms-auto me-0 me-sm-3">

          <!-- Theme -->
          <li class="nav-item mx-1">
            <button type="button"
                    class="nav-link border-0 bg-transparent"
                    @click="handleThemeClick"
                    title="Change theme"
                    aria-label="Change theme">
              <i class="fa-solid me-1 me-sm-0"
                :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"></i>
              <span class="d-sm-none">
                Change theme
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  text-decoration: underline;
  pointer-events: none;
}
</style>
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

Add to `src/main.ts`
```ts
import './index.css'
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