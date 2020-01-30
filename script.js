//Pedimos el servicio $http a Angular para llamar a la API de GitHub
var MainCtrl = function($scope, $http) {

    var onUserComplete = function(response){
        $scope.user = response.data;
    };

    var onError = function(reason){
        $scope.error = "Could not fetch the user";
    };
    
    /* Si la URL no es correcta no aparecerá los datos en la pantalla
       porque no se adjuntaron los datos en el objeto $scope, porque el
       método then sólo si la llamada get es exitosa. Si hay un error puedo
       llamar a una segunda funcion */
    $http.get("https://ap.github.com/users/robconery")
            .then(onUserComplete, onError);
   
    $scope.message = "Hello, Angular!";
    
};