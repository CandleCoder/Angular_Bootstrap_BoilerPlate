'use strict';

/**
 * @ngdoc function
 * @name demoClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the demoClientApp
 */
angular.module('demoClientApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.login = [
      {
      title: 'A New Hope',
      url: 'http://youtube.com/embed/1g3_CFmnU7k'
    },
    {
      title: 'The Empire Strikes Back',
      url: 'http://youtube.com/embed/96v4XraJEPI'
    },
    {
      title: 'Return of the Jedi',
      url: 'http://youtube.com/embed/5UfA_aKBGMc'
    }
    ];
  });
