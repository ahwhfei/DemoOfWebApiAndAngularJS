'use strict';

angular.module('widgets.students', ['adf.provider'])
  .value('studentsServiceUrl', 'http://localhost:9009/api/students')
  .config(function (dashboardProvider) {
    dashboardProvider
      .widget('students', {
        title: 'All students',
        description: '',
        templateUrl: 'scripts/widgets/students/students.html',
        controller: 'studentsController',
        resolve: {
          students: function (studentsService, config) {
            var promise = studentsService.get().then(function (data) {
              console.log(data);
              return data;
            });

            return promise;
          }
        },
        edit: {
          templateUrl: 'app/scripts/widgets/studentsList/edit.html'
        }
      });
  })
  .service('studentsService', function ($q, $http, studentsServiceUrl) {
    return {
      get: function (url) {
        var defer = $q.defer();
        var url = studentsServiceUrl;
        $http.get(url).then(function (response) {
          defer.resolve(response.data);
        });
        return defer.promise;
      }
    };
  })
  .controller('studentsController', function ($scope, $rootScope, students) {
    $scope.students = students;
  });

