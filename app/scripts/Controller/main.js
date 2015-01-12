/**
 * Created by garima.gupta on 1/8/2015.
 */
'use strict';

angular.module('TextEditorDemo')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.categories = null;
        $http({
            method: 'GET',
            url: 'categories.json'

            //data: {abc:'test'}
        }).
            success(function (data, status, headers, config) {
                console.log('SuccessFul Get Fetch');
                $scope.categories = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status);
                console.log(data);
            });


    });