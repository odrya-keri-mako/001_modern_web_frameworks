# <img src="../public/icons/angular.svg" height="30"> Angular

## Create project
```bash
ng new angular --skip-tests
# --skip-tests: do not generate test files
```

## Install dependencies
```bash
npm install bootstrap@5.3.8 @fortawesome/fontawesome-free@7.3.1
```

## Import dependencies and add global styles
Add to `src/styles.css`
```css
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

.text-small-caps {
	font-variant: small-caps;
}
.fs-sm {
  font-size: 0.7rem;
}
```

Add to `src/main.ts`
```ts
import 'bootstrap';
```

The content of `src/main.ts` should be:
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import 'bootstrap';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```

## Project structure
Main files in the `src/app/` directory:
```text
src/app/
├── components/
│   ├── header/
│   └── footer/
│
├── pages/
│   ├── home/
│   ├── page1/
│   └── page2/
│
├── services/
│   └── common.ts
│
├── app.config.ts
├── app.css
├── app.html
├── app.routes.ts
└── app.ts
```

- `app.ts` → root component
- `app.html` → root component template
- `app.css` → root component styles
- `app.config.ts` → application configuration and providers
- `app.routes.ts` → route configuration

## Create components
### Layout components
```bash
ng generate component components/header --skip-tests
ng generate component components/footer --skip-tests

ng generate component pages/home --skip-tests
ng generate component pages/page1 --skip-tests
ng generate component pages/page2 --skip-tests

ng generate service services/common --skip-tests
# --------------------------------------------
# OR abbreviated Angular CLI form
ng generate c components/header --skip-tests
ng generate c components/footer --skip-tests

ng generate c pages/home --skip-tests
ng generate c pages/page1 --skip-tests
ng generate c pages/page2 --skip-tests

ng generate s services/common --skip-tests
# --skip-tests: do not generate test files
```

## Configure routing
Add routes to `src/app/app.routes.ts`
```ts
...

import { Home } from './pages/home/home';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'page1',
    component: Page1
  },
  {
    path: 'page2',
    component: Page2
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

Modify `src/app/app.ts`
```ts
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Common } from './services/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Initialize common service
  private readonly common = inject(Common);

  // On init
  ngOnInit(): void {
    console.log('Application started...');
  }
}
```

## Create application layout
Modify `src/app/app.html`
```html
<div class="page-container d-flex flex-column min-vh-100">
  <app-header class="sticky-top"></app-header>
  <main class="position-relative flex-fill d-flex flex-column justify-content-center">
    <router-outlet></router-outlet>
  </main>
  <app-footer></app-footer>
</div>
```

Modify `src/app/services/common.ts`
```ts
import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class Common {

  // Set common title
  readonly commonTitle = signal('welcome!')
}
```

## Create pages (routes)
### Home page
Modify `src/app/pages/home/home.ts`
```ts
import { Component, OnInit, inject } from '@angular/core';
import { Common } from '../../services/common'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  // Get common
  common = inject(Common);

  // Set title
  title = 'home';

  // On init
  ngOnInit(): void {
    console.log('Home controller...');
  }
}
```

Modify `src/app/pages/home/home.html`
```html
<div class="container">
  <h1 class="text-center text-capitalize display-1">
    {{ common.commonTitle() }}
  </h1>

  <h4 class="page-title text-center text-capitalize display-4">
    <i class="fa-solid fa-house me-1"></i>
    <span>{{ title }}</span>
  </h4>
</div>
```

Add to `src/app/pages/home/home.css`
```css
.page-title {
  color: red;
}
```

### Page1
Modify `src/app/pages/page1/page1.ts`
```ts
import { Component, OnInit, inject } from '@angular/core';
import { Common } from '../../services/common'

@Component({
  selector: 'app-page1',
  imports: [],
  templateUrl: './page1.html',
  styleUrl: './page1.css'
})
export class Page1 implements OnInit {

  // Get common
  common = inject(Common);
  
  // Set title
  title = 'page 1';

  // On init
  ngOnInit(): void {
    console.log('Page1 controller...');
  }
}
```

Modify `src/app/pages/page1/page1.html`
```html
<div class="container">
  <h1 class="text-center text-capitalize display-1">
    {{ common.commonTitle() }}
  </h1>

  <h4 class="page-title text-center text-capitalize display-4">
    <i class="fa-solid fa-face-smile me-1"></i>
    <span>{{ title }}</span>
  </h4>
</div>
```

Add to `src/app/pages/page1/page1.css`
```css
.page-title {
  color: blue;
}
```

### Page2
Modify `src/app/pages/page2/page2.ts`
```ts
import { Component, OnInit, inject } from '@angular/core';
import { Common } from '../../services/common'

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 implements OnInit {

  // Get common
  common = inject(Common);
  
  // Set title
  title = 'page 2';

  // On init
  ngOnInit(): void {
    console.log('Page2 controller...');
  }
}
```

Modify `src/app/pages/page2/page2.html`
```html
<div class="container">
  <h1 class="text-center text-capitalize display-1">
    {{ common.commonTitle() }}
  </h1>

  <h4 class="page-title text-center text-capitalize display-4">
    <i class="fa-solid fa-globe me-1"></i>
    <span>{{ title }}</span>
  </h4>
</div>
```

Add to `src/app/pages/page2/page2.css`
```css
.page-title {
  color: green;
}
```

## Header routing
Add to `src/app/components/header/header.css`
```css
.nav-item a.active {
	text-decoration: underline;
	pointer-events: none;
}
```
  
Modify `src/app/components/header/header.ts`
```ts
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {

  // Set theme key
  private readonly themeKey = '001_modern_web_frameworks_angular_theme';

  // Define theme
  theme: 'dark' | 'light' = 'dark';

  // On init
  ngOnInit(): void {
    console.log('Header controller...');
    const savedTheme = localStorage.getItem(this.themeKey);
    this.theme = savedTheme === 'light' ? 'light' : 'dark';
    this.applyTheme();
  }

  // Toggle theme
  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.themeKey, this.theme);
    this.applyTheme();
  }

  // Set theme
  private applyTheme(): void {
    document.body.setAttribute('data-bs-theme', this.theme);
  }
}
```

Modify `src/app/components/header/header.html`
```html
<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-body-tertiary">

  <!-- Container -->
  <div class="container-fluid">

    <!-- Hamburger icon -->
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

      <!-- Navbar content LEFT -->
      <ul class="navbar-nav me-auto ms-0 ms-sm-3">

        <!-- Home -->
        <li class="nav-item mx-1">
          <a class="nav-link"
             routerLink="/"
             routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: true }"
             data-bs-toggle="collapse"
             data-bs-target=".navbar-collapse.show">
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-house me-1"></i>
              <span>Home</span>
            </span>
          </a>
        </li>

        <!-- Page1 -->
        <li class="nav-item mx-1">
          <a class="nav-link"
             routerLink="/page1"
             routerLinkActive="active"
             data-bs-toggle="collapse"
             data-bs-target=".navbar-collapse.show">
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-face-smile me-1"></i>
              <span>Page1</span>
            </span>
          </a>
        </li>

        <!-- Page2 -->
        <li class="nav-item mx-1">
          <a class="nav-link"
             routerLink="/page2"
             routerLinkActive="active"
             data-bs-toggle="collapse"
             data-bs-target=".navbar-collapse.show">
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-globe me-1"></i>
              <span>Page2</span>
            </span>
          </a>
        </li>
      </ul>

      <!-- Navbar content RIGHT -->
      <ul class="navbar-nav ms-auto me-0 me-sm-3">

        <!-- Theme -->
        <li class="nav-item mx-1">
          <button type="button"
                  class="nav-link border-0 bg-transparent"
                  (click)="toggleTheme()"
                  title="Change theme"
                  aria-label="Change theme"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show">
            <i class="fa-solid me-1 me-sm-0"
              [class.fa-sun]="theme === 'dark'"
              [class.fa-moon]="theme === 'light'">
            </i>
            <span class="d-sm-none">
              Change theme
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Footer
Modify `src/app/components/footer/footer.ts`
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {

  // Get current year
  currentYear = new Date().getFullYear();

  // On init
  ngOnInit(): void {
    console.log('Footer controller...');
  }
}
```

Modify `src/app/components/footer/footer.html`
```html
<div class="container-fluid bg-body-tertiary px-3 pt-2">
  <p class="fw-lighter fs-sm mb-2 text-center">
    &copy; Copyright&nbsp;&nbsp;2021-{{ currentYear }}
    Keri Informatics, Makó
  </p>
</div>
```

## Start a local development server
To start a local development server, run:
```bash
ng serve
```

## Build application
```bash
ng build
```

## Preview build
```bash
npx http-server dist/angular/browser --open
```
