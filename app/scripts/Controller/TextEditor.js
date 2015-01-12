/**
 * Created by garima.gupta on 1/8/2015.
 */
angular.module('TextEditorDemo')
    .controller('TextEditorCtrl', function ($scope,$http) {

        $http.defaults.headers.put = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };
        $http.defaults.useXDomain = true;

        //$scope.data.htmlcontent = null;
        $scope.htmlVariable = '<p><b>Write here...</b></p>';


        $http({
            method: 'GET',
            url: 'content.html'

            //data: {abc:'test'}
        }).
            success(function (data, status, headers, config) {
                console.log('SuccessFul Get Fetch');

            }).
            error(function (data, status, headers, config) {
                console.log(status);
                console.log(data);
            });


$scope.sendToServer = function(){



    console.log($scope.htmlVariable);
    $http({
        method: 'POST',
        //url: 'http://localhost:8080/TestEngine_01/TestApp',
        url: 'content.html',
        data: $scope.htmlVariable
        //data: {abc:'test'}
    }).
        success(function (data, status, headers, config) {
            console.log('SuccessFul Fetch');
            console.log(data);
            $scope.htmlVariable = data;
        }).
        error(function (data, status, headers, config) {
            console.log(status);
            console.log(data);
        });
}

    });