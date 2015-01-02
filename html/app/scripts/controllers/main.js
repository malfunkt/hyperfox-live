'use strict';

var ERR_HYPERFOX_NOT_RUNNING = 'Could not connect to the Hyperfox API. Seems like hyperfox is not running on your local box.';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ParentCtrl', function($scope, $routeParams, api) {

    $scope.apierror = null;

    $scope.setTerms = function() {
      $scope.$broadcast('search');
    };

  })
  .controller('DetailsCtrl', function($scope, $routeParams, api) {
    $scope.currentID  = parseInt($routeParams.id, 10);
    $scope.details = {};

    api.get($scope.currentID).then(function(res) {
      $scope.apierror = null;

      $scope.details = res;
    }, function(reason) {
      $scope.apierror = ERR_HYPERFOX_NOT_RUNNING;
    });

    $scope.$on('search', function() {
      location.href = '/#/1';
      refresh();
    });

  })
  .controller('MainCtrl', function($scope, $routeParams, api) {

    if ($routeParams.source) {
      window.localStorage.setItem('source', $routeParams.source);
    };

    $scope.$on('search', function() {
      location.href = '/#/';
      refresh();
    });

    $scope.requests     = [];
    $scope.totalPages   = 0;
    $scope.currentPage  = parseInt($routeParams.page || 1, 10);

    var pull = function(page, q) {
      api.pull(page, q).then(function(res) {
        $scope.apierror = null;

        $scope.requests     = res.data;
        $scope.totalPages   = res.pages;
        $scope.currentPage  = res.page;

      }, function(reason) {
        $scope.apierror = ERR_HYPERFOX_NOT_RUNNING;
      });
    };

    var refresh = function() {
      pull($scope.currentPage, $scope.q);
    };

    setInterval(
      function() {
        refresh();
      },
      10000
    );

    refresh();
  })
  .filter('mime', function() {
    return function(input) {
      var c = input.indexOf(';');
      if (c >= 0) {
        return input.substr(0, c);
      };
      return input;
    }
  })
  .filter('origin', function() {
    return function(input) {
      if (input) {
        var c = input.indexOf(':');
        if (c >= 0) {
          return input.substr(0, c);
        };
      }
      return input;
    }
  })
  .filter('size', function() {
    return function(input) {
      if (!input) {
        return '-';
      };
      var kb = 1024;
      if (input < kb) {
        return input + 'b';
      } else if (input < kb*kb) {
        return (input/kb).toFixed(2) + 'Kb';
      }
      return (input/(kb*kb)).toFixed(2) + 'Mb';
    }
  })
  .filter('time', function() {
    return function(input) {
      if (input < 1e9) {
        return (input/1e6).toFixed(2) + 'ms';
      };
      return (input/1e9).toFixed(2) + 's';
    }
  })
  .filter('api_request', function() {
    return function(input) {
      return endpoint(input);
    }
  })
  .filter('pageRange', function() {
    return function(input, current, total, size) {
      var sz = 3;

      var lo = Math.max(1, current - sz);
      var hi = Math.min(total, current + sz);

      var i;
      for (i = lo; i <= hi; i++) {
        input.push(i);
      };

      return input;
    };
  });
