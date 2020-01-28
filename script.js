//"MainCtrl" es una variable global (la estoy definiendo afuera de cualquier otro código)
var MainCtrl = function($scope) {

    //Tenemos al modelo adjunto al $scope y se mostrará en la vista
    //gracias a las binding expression
    /* La palabra $scope tiene un sentido porque realmente determina el escopo
        de donde las data binding expression se evalúan. Si Angular encuentra {{message}} en el HTML
        va a ir a buscar en el objeto $scope del controller asociado a esa determinada area del HTML
    */
    $scope.message = "Hello, Angular!";
};