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