var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('portfolioProjects', function ($scope, $http) {
  
  $http.get('data/projects.json').success(function (data) {
    $scope.rows = data;
    console.log('got em');
  });

  $scope.test = "Hello";
});

portfolioApp.directive('scrollPosition', function ($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function (scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function () {
        scope.scroll = windowEl.scrollTop();
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});
