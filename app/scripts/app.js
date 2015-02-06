'use strict';

angular
  .module('TextEditorDemo', [
    'ngRoute',
     'ui.bootstrap',
        'textAngular',
        'colorpicker.module',
        'wysiwyg.module'
  ])



        //FTP Step:9.1 - Add code of final route


            .config(function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/TextEditor', {
                        templateUrl: 'views/TextEditor.html',
                        controller: 'TextEditorCtrl'
                    })
                    .when('/AngularTextEditor', {
                        templateUrl: 'views/AngularTextEditor.html',
                        controller: 'TextEditorCtrl'
                    })

                    .when('/topic/:category', {
                        templateUrl: 'views/topic.html',
                        controller: 'TopicCtrl'
                    })
                    .otherwise({
                        redirectTo: '/TextEditor'
                    });
            });
//hjhkabc


