'use strict';

function endpoint(url) {
  var prefix = window.localStorage.getItem('source');

  if (!prefix) {
    prefix = '127.0.0.1:3030';
  };

  return 'http://' + prefix + url;
}

var downloadLink = function(id) {
  return endpoint('/download?id='+id);
};

angular.module('webApp')
  .service('api', function($http) {
    var api = {};

    api.get = function(id) {
      var req = {
        'method': 'POST',
        'url': endpoint('/get'),
        'data': $.param({
          'id': id
        }),
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      var promise = $http(req).then(function(res) {
        return res.data;
      });

      return promise;
    };

    api.pull = function(page, q) {

      var req = {
        'method': 'POST',
        'url': endpoint('/pull'),
        'data': $.param({
          'page': page,
          'q': q || ''
        }),
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      var promise = $http(req).then(function(res) {
        return res.data;
      });

      return promise;
    };

    return api;
  });
