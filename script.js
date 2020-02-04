
(function() {
    
    var app = angular.module("gitHubViewer", [])

    var MainCtrl = function($scope, $http, $interval, $log) {

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

        /* Cuando se recarga la pagina el usuario tendra 5 segundos para cambiar el nombrey hacer
           una busqueda, sino la busqueda se automatizará.Como invocar la función 1 vez por segundo?
           JS tiene unas funciones globales nativas que se puede usar para trabajar con temporizadores.
           Angular provee servicios que se relacionan con esas dos funciones $timeout y $interval.
           Queremos que se llame a esta funcion 1 vez por segundo. Porque elegir los servicios ante las 
           funciones de JS? Porque se puede hacer pruebas unitarias. Es más facil hacer las pruebas con 
           Angular que con objetos JS. Otra razón es como Angular hace internamente el data binding
        */
        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            };
        };

        var countdownInterval = null;
        
        var startCountdown = function(){
            //Después de 5 tics deja de llamar la decrementCountdown
            //Cuando llamo a interval esto me devuelve un objeto
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };
        
        $scope.search = function(username){
            $log.info("Searching for " + username);
            $http.get("https://api.github.com/users/" + username)
                    .then(onUserComplete, onError);
            if(countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }        
        };

        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        startCountdown();
    };

    /* 
        En el proceso de minificación se cambia los nombres de variables y parámetros
        por eso es importante informar a Angular, que el primer parámetro corresponde a 
        $scope y el segundo a $http
    */
    app.controller("MainCtrl", ["$scope", "$http", "$interval", "$log", MainCtrl])

}())    

