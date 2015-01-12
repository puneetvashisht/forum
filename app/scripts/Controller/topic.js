/**
 * Created by Puneet on 1/12/2015.
 */
'use strict';

angular.module('TextEditorDemo')
.controller('TopicCtrl', function ($scope,$routeParams, $http) {
    console.log('Printing Category ID');
    console.log($routeParams.category);
        $scope.category = $routeParams.category;


        $scope.topics = null;
        $http({
            method: 'GET',
            url: 'topics.json'

            //data: {abc:'test'}
        }).
            success(function (data, status, headers, config) {
                console.log('SuccessFul Get Fetch');
                $scope.topics = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status);
                console.log(data);
            });

        //$scope.someVal = $routeParams.country;
});