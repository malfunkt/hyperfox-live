'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    //'luegg.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .when('/:page?', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/#/'
      });
  })
  .directive('tooltip', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $(element).hover(function(){
          // on mouseenter
          $(element).tooltip('show');
        }, function(){
          // on mouseleave
          $(element).tooltip('hide');
        });
      }
    };
  });
  ;
