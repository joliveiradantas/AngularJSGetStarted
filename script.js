/* Function to build modules */
/* 
    Utilizar un objeto que expone métodos y datos, por ejemplo necesitamos a 
    worker object y puedo obtener ese objeto invocando a una función createWorker().
    Una vez que tenga al worker puedo hacer cosas como: worker.job1(), worker.job2()
    No nos interesa qué son esos trabajos. job1() podría llamar a un servidor.
    Hay varias maneras de crear ese objeto que tiene 2 métodos, con JS. Pero vamos a ver
    el enfoque que se utiliza en Angular
*/

/* Revealing Module Pattern
    Es módulo porque encapsulamos algún código adentro de una función.
    Módulo en el desarrollo de software es una colección de componentes y características
    que puedes juntar para realizar un trabajo útil.
    Estamos creando un módulo en JS definiendo una función, dentro de esa función construimos algunas
    cosas que podemos usar y exponer al mundo exterior e incluso tener algunos detalles privados
    de implementación.    
*/

var workCount = 0;

var createWorker = function() {

    //Cuando me pongo a escribir un objeto que va a exponer a algun tipo de API hay que
    //centrarse en los detalles de la implementación

    //Detalles privados de la implementación
    var task1 = function(){
        workCount += 1;
        console.log("task 1 " + workCount);
    };
    
    var task2 = function(){
        workCount += 1;
        console.log("task 2 " + workCount);
    };

    //Como devuelvo un objeto que expone task1 y task2?
    return {
        job1: task1,
        job2: task2
    }
};

var worker = createWorker();
worker.job1();
worker.job2();
worker.job2();
Worker.job2();

/* Esto es lo que haremos con Angular, definir una función que devuelve un objeto
que proporciona una API u otras piezas de código en otra parte de la app para usar */