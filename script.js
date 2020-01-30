
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
        
        $http.get("https://api.github.com/users/angular")
                .then(onUserComplete, onError);


        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        
    };

    /* 
        En el proceso de minificación se cambia los nombres de variables y parámetros
        por eso es importante informar a Angular, que el primer parámetro corresponde a 
        $scope y el segundo a $http
    */
    app.controller("MainCtrl", ["$scope", "$http", MainCtrl])

}())    

