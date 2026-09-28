# Modern web frameworks
Simple application with routes

## Implementations
- <img src="./public/icons/html5.svg" height="16"> Initial
- <img src="./public/icons/angularJS.svg" height="16"> AngularJS
- <img src="./public/icons/angular.svg" height="16"> Angular
- <img src="./public/icons/react.svg" height="16"> React
- <img src="./public/icons/vue.svg" height="16"> Vue
- <img src="./public/icons/svelte.svg" height="16"> Svelte

All implementations create essentially the same application:
- responsive Bootstrap navigation
- Home, Page1 and Page2 routes
- active navigation item
- shared application state
- dark/light theme stored in localStorage
- component/page specific styles
- dynamic footer year
  
## Screenshots
<div>
	<img src="./public/screenshots/home1.png" width="200">
	<img src="./public/screenshots/home2.png" width="200">
</div>
<div>
	<img src="./public/screenshots/page1.png" width="200">
	<img src="./public/screenshots/page2.png" width="200">
</div>
<div>
	<img src="./public/screenshots/home3.png" width="98">
	<img src="./public/screenshots/home4.png" width="98">
</div>

## Development environment
- HTML5
- CSS3
- Bootstrap v5.3.8
- Font Awesome v7.3.1
- JavaScript ES6+

## Minimum development environment
- Node.js v24.15.0
- npm v11
- TypeScript v6.0.x
  
## Framework versions
- AngularJS v1.8.2
- Angular UI-Router v1.1.2
- AngularCSS v1.0.8
- Angular v22.x
- Angular CLI v22.x
- React v19.x
- React Router v8.x
- Vue v3.5+
- Vue Router v5.x
- Svelte v5.x
- svelte-spa-router v5.x

## Check development environment
```bash
node --version
npm --version
tsc --version
ng version
```

## Update the development environment
> Angular projects use the TypeScript version defined in the project's dependencies.  
> Do not update TypeScript independently without checking Angular compatibility.
```bash
npm install -g npm@11
npm install -g typescript@6.0
npm install -g @angular/cli@22
```

> Alternatively, update to the latest versions with CAUTION:
```bash
npm install -g npm@latest
npm install -g typescript@latest
npm install -g @angular/cli@latest
```

## Create projects if they don't already exist
- <img src="./public/icons/angular.svg" height="16"> Angular
	```bash
	ng new angular --skip-tests
	# --skip-tests: do not generate test files
	```
- <img src="./public/icons/react.svg" height="16"> React
	```bash
	npm create vite@9 react -- --template react-ts
	```
- <img src="./public/icons/vue.svg" height="16"> Vue
	```bash
	npm create vue@3
	```
- <img src="./public/icons/svelte.svg" height="16"> Svelte
	```bash
	npm create vite@9 svelte -- --template svelte-ts
	```

---

## Framework comparison
| Feature | AngularJS | Angular | React | Vue | Svelte |
|---|---|---|---|---|---|
| Main concept | Controllers + scopes | Components + services | Components + hooks | Components + Composition API | Compiled components + runes |
| Main language | JavaScript | TypeScript | TypeScript / TSX | TypeScript + templates | TypeScript + Svelte syntax |
| Component structure | Separate HTML + JS + CSS | TS + HTML + CSS | TSX + CSS Module | Single-file `.vue` component | Single-file `.svelte` component |
| Routing | Angular UI-Router | Angular Router | React Router | Vue Router | svelte-spa-router |
| Navigation | `ui-sref` | `routerLink` | `NavLink` | `RouterLink` | `use:link` |
| Shared application state | `$rootScope` | Service + `signal()` | Context + `useState()` | Composable + `ref()` | Shared `$state()` |
| Lifecycle used in this project | Controller / `.run()` | `ngOnInit()` | `useEffect()` | `onMounted()` | `onMount()` |
| Template value syntax | `{{ value }}` | `{{ value }}` | `{value}` | `{{ value }}` | `{value}` |
| Conditional classes | `ng-class` | `[class.name]` | JavaScript expression | `:class` | `class:name` |
| Component/page styles | AngularCSS + separate CSS | Component style encapsulation | CSS Modules | `<style scoped>` | `<style>` scoped by default |
| Build tool | Not required | Angular CLI | Vite | Vite | Vite |
| Routing mode in this project | Hash | History | History | History | Hash |
| Dependency injection | Built in | Built in | No built-in DI | No traditional DI | No traditional DI |
| Theme state in this project | `$rootScope` | Component property | `useState()` | `ref()` | `$state()` |
| Active navigation | `ui-sref-active` | `routerLinkActive` | `NavLink` active state | `RouterLink` active class | `use:active` |

### Main similarities

All five implementations solve the same basic problems: routing, reusable components, shared state, lifecycle handling, conditional styling, responsive navigation, theme switching, and page-specific styles.

### Main differences

The biggest differences are in syntax and architecture. AngularJS and Angular provide more framework-level structure and dependency injection, React relies heavily on JavaScript/TypeScript and hooks, Vue combines templates with the Composition API, while Svelte uses compiler-based reactivity and concise component syntax.

## Install (only first time)
```bash
./install.bat
```

## Start
```bash
./start.bat
```

## Build
```bash
./build.bat
```

## Build preview
```bash
./build-preview.bat
```
