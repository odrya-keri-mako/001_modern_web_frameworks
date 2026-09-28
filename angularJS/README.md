# <img src="../public/icons/angularJS.svg" height="40"> AngularJS

## Project structure
```md
angularJS/
├── assets/
│   └── image/
│       └── icon/
│           └── angularJS.svg
│
├── css/
│   ├── app.css
│   ├── header.css
│   ├── home.css
│   ├── page1.css
│   └── page2.css
│
├── html/
│   ├── components/
│   │   ├── footer.html
│   │   └── header.html
│   │
│   ├── layouts/
│   │   └── root.html
│   │
│   └── pages/
│       ├── home.html
│       ├── page1.html
│       └── page2.html
│
├── js/
│   └── app.js
│
├── index.html
├── create-project-structure.bat
└── README.md
```

## Helper to create project structure
Create and run `<angularJS folder>create-project-structure.bat`
```bat
@echo off

mkdir assets 2>nul
mkdir assets\image 2>nul
mkdir assets\image\icon 2>nul

mkdir css 2>nul

mkdir html 2>nul
mkdir html\components 2>nul
mkdir html\layouts 2>nul
mkdir html\pages 2>nul

mkdir js 2>nul

if not exist css\app.css type nul > css\app.css
if not exist css\header.css type nul > css\header.css
if not exist css\home.css type nul > css\home.css
if not exist css\page1.css type nul > css\page1.css
if not exist css\page2.css type nul > css\page2.css

if not exist html\layouts\root.html type nul > html\layouts\root.html
if not exist html\components\footer.html type nul > html\components\footer.html
if not exist html\components\header.html type nul > html\components\header.html
if not exist html\pages\home.html type nul > html\pages\home.html
if not exist html\pages\page1.html type nul > html\pages\page1.html
if not exist html\pages\page2.html type nul > html\pages\page2.html

if not exist js\app.js type nul > js\app.js

echo Project structure created.
pause
```

### RUN batch file
```bash
./create-project-structure.bat
```

## Configure project
### Modify file `angularJS/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>AngularJS application</title>
	<link rel="icon" type="image/svg+xml" href="./assets/image/icon/angularJS.svg">

	<!-- Application components -->
  <link rel="stylesheet" 
				href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap.min.css">
	<link rel="stylesheet" 
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">
  <link rel="stylesheet" href="./css/app.css">
</head>
<!-- 
Define application is angularJS application
Change Bootstrap theme conditional from $rootScope.theme value
-->
<body ng-app="app"
			ng-attr-data-bs-theme="{{ $root.theme || 'dark' }}">
	
	<!-- Application container -->
	<ui-view class="app-container"></ui-view>

	<!-- Application components -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.1.2/angular-ui-router.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.1.2/stateEvents.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-css/1.0.8/angular-css.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/js/bootstrap.bundle.min.js"></script>
	<script src="./js/app.js"></script>
</body>
</html>
```

### Modify file `angularJS/css/app.css`
```css
.text-small-caps {
	font-variant: small-caps;
}
.fs-sm {
  font-size: 0.7rem;
}
```

### Modify file `angularJS/css/header.css`
```css
.nav-item a.active {
	text-decoration: underline;
	pointer-events: none;
}
```

### Modify file `angularJS/css/home.css`
```css
.page-title {
  color: red;
}
```

### Modify file `angularJS/css/page1.css`
```css
.page-title {
  color: blue;
}
```

### Modify file `angularJS/css/page2.css`
```css
.page-title {
  color: green;
}
```

### Modify file `angularJS/js/app.js`
```js
;(function(window, angular) {

  'use strict';

  // Define application module
  // Include ui.router, ui.router.state.events, and angularCSS
	angular.module('app', [
		'ui.router',
    'ui.router.state.events',
    'angularCSS' 
	])

	// Application config
	.config([
    '$stateProvider', 
    '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      // Root layout, and components
      .state('root', {
        abstract: true, 
        views: {
          '': {
            templateUrl: './html/layouts/root.html'
          },
          'header@root': {
            templateUrl: './html/components/header.html',
            controller: 'headerController'
          },
          'footer@root': {
            templateUrl: './html/components/footer.html',
            controller: 'footerController'
          }
        }
      })

      // State home
      .state('home', {
				url: '/',
        parent: 'root',
				templateUrl: './html/pages/home.html',
        controller: 'homeController',
        css: './css/home.css' 
			})

      // State page1 
      .state('page1', {
				url: '/page1',
        parent: 'root',
				templateUrl: './html/pages/page1.html',
        controller: 'page1Controller',
        css: './css/page1.css'
			})

      // State page2
      .state('page2', {
				url: '/page2',
        parent: 'root',
				templateUrl: './html/pages/page2.html',
        controller: 'page2Controller',
        css: './css/page2.css'
			});
      
      $urlRouterProvider.otherwise('/');
    }
  ])

	// Application run
  .run([
    '$rootScope',
    function($rootScope) {
      console.log('Application started...');
      
      // Set welcome message
      $rootScope.commonTitle = "welcome!";

      // Get last theme
      const theme = localStorage.getItem(
        "001_modern_web_frameworks_angularJS_theme");
      $rootScope.theme = theme ?? "dark";
    }
  ])

  // Home controller
  .controller('homeController', [
    '$scope',
    function($scope) {
      console.log('Home controller...');
      $scope.title = "Home";
    }
  ])

  // Page1 controller
  .controller('page1Controller', [
    '$scope',
    function($scope) {
      console.log('Page1 controller...');
      $scope.title = "Page 1";
    }
  ])

  // Page2 controller
  .controller('page2Controller', [
    '$scope',
    function($scope) {
      console.log('Page2 controller...');
      $scope.title = "Page 2";
    }
  ])

  // Header controller
  .controller('headerController', [
    '$rootScope',
    '$scope',
    '$css',
    function($rootScope, $scope, $css) {
      console.log('Header controller...');

      // Bind component CSS
      $css.bind('./css/header.css', $scope);

      // Toggle theme
      $scope.toggleTheme = () => {
        $rootScope.theme = $rootScope.theme === "dark" ? "light" : "dark";
        localStorage.setItem(
          "001_modern_web_frameworks_angularJS_theme", $rootScope.theme);
      };
    }
  ])

  // Footer controller
  .controller('footerController', [
    '$scope',
    function($scope) {
      console.log('Footer controller...');
      $scope.currentYear = (new Date()).getFullYear();
    }
  ]);
	
})(window, angular);
```

### Modify file `angularJS/html/layouts/root.html`
```html
<div class="page-container d-flex flex-column min-vh-100">
	<header ui-view="header" class="sticky-top"></header>
	<main 	ui-view="" class="position-relative flex-fill d-flex 
														flex-column justify-content-center"></main>
	<footer ui-view="footer"></footer>
</div>
```

### Modify file `angularJS/html/components/footer.html`
```html
<div class="container-fluid bg-body-tertiary px-3 pt-2">
  <p class="fw-lighter fs-sm mb-2 text-center">
    <!-- currentYear set in footerController ($scope.currentYear) -->
    &copy; Copyright&nbsp;&nbsp;2021-{{currentYear}} 
    Keri Informatics, Makó
  </p>
</div>
```

### Modify file `angularJS/html/components/header.html`
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
					<!-- 
					When state defined in ui-sref is selected (home), 
					then element get class from attribute 
					ui-sref-active property (active),
					otherwise class removed	
					-->
					<a class="nav-link" 
						 ui-sref="home" 
						 ui-sref-active="active"
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
						 ui-sref="page1" 
						 ui-sref-active="active"
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
						 ui-sref="page2" 
						 ui-sref-active="active"
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
									ng-click="toggleTheme()"
									title="Change theme"
									aria-label="Change theme"
									data-bs-toggle="collapse" 
						 			data-bs-target=".navbar-collapse.show">
						<!-- 
						Element class conditional.
						when $rootScope.theme is 'dark' then get class 'fa-sun',
						when $rootScope.theme is 'light' then get class 'fa-moon',
						otherwise nothing
						-->
            <i class="fa-solid me-1 me-sm-0"
               ng-class="{'fa-sun': $root.theme === 'dark',
                          'fa-moon': $root.theme === 'light'}"></i>
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

### Modify file `angularJS/html/pages/home.html`
```html
<div class="container">
	<h1 class="text-center text-capitalize display-1">
		{{$root.commonTitle}}
	</h1>

	<h4 class="page-title text-center text-capitalize display-4">
		<i class="fa-solid fa-house me-1"></i>
		<span>{{title}}</span>
	</h4>
</div>
```

### Modify file `angularJS/html/pages/page1.html`
```html
<div class="container">
	<h1 class="text-center text-capitalize display-1">
		{{$root.commonTitle}}
	</h1>

	<h4 class="page-title text-center text-capitalize display-4">
		<i class="fa-solid fa-face-smile me-1"></i>
		<span>{{title}}</span>
	</h4>
</div>
```

### Modify file `angularJS/html/pages/page2.html`
```html
<div class="container">
	<h1 class="text-center text-capitalize display-1">
		{{$root.commonTitle}}
	</h1>

	<h4 class="page-title text-center text-capitalize display-4">
		<i class="fa-solid fa-globe me-1"></i>
		<span>{{title}}</span>
	</h4>
</div>
```

## Start on a local development server
```html
localhost/<path_to_project>/angularJS/
```
---