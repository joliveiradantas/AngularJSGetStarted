
(function() {

    //forma de definir un módulo pasando una matriz vacia para decir que no tiene
    //dependencias con otros módulos
    var app = angular.module("gitHubViewer", [])

    var MainCtrl = function($scope, $http) {

        var onUserComplete = function(response){
            $scope.user = response.data;
        };

        var onError = function(reason){
            $scope.error = "Could not fetch the user";
        };    
        
        $http.get("https://api.github.com/users/robconery")
                .then(onUserComplete, onError);
    
        $scope.message = "Hello, Angular!";
        
    };

    app.controller("MainCtrl", MainCtrl)

}())    