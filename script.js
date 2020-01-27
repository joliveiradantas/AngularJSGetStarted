/* Function as abstraction */
/* 
    Elevando el nivel de abstracción, porque cuando se programa con Angular vamos a necesitar
    definir una función que ejecute algo de trabajo o un algoritmo o que cree alguna estructura
    de datos, y necesitará tomar esa función y pasar a Angular porque necesitará de esta función
    y su abstracción para ejecutar algo en su nombre.  
    Que hay de utilidad? Porque no invocar directamente work()?
    La idea es proporcionar abstracción.
    Probablemente doWork() represente alguna rutina, con lógica, que indica cuando el trabajo 
    va a empezar y cuando va a terminar, por ejemplo. O incluso hay que realizar alguna operación peligrosa
    y podemos incluir un try y catch. Por ende, doWork se convierte en una función genérica.
*/
var work = function() {
    console.log("Working hard!");
}

//El parámetro "f" es otra función
var doWork = function(f) {
    
    console.log("starting!");

    try {
        f();    
    } 
    catch (error) {   
        console.log(error);     
    }    

    console.log("end");
}

//No estamos invocando "work"
doWork(work);