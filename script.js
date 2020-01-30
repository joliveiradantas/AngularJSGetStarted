
(function() {
    
    var app = angular.module("gitHubViewer", [])

    var MainCtrl = function($scope, $http) {

        var onUserComplete = function(response){
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                    .then(onRepos, onError);
        };

        var onRepos = function(response){
            //Podría también utilizar una variable como $scope.user.repos
            $scope.repos = response.data;
        };

        var onError = function(reason){
            $scope.error = "Could not fetch the data";
        };  
        
        $scope.search = function(username){
            $http.get("https://api.github.com/users/" + username)
                    .then(onUserComplete, onError);
        };
        


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

