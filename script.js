/* Function to build modules */
/* 
    Utilizar un objeto que expone métodos y datos, por ejemplo necesitamos a 
    worker object y puedo obtener ese objeto invocando a una función createWorker().
    Una vez que tenga al worker puedo hacer cosas como: worker.job1(), worker.job2()
    No nos interesa qué son esos trabajos. job1() podría llamar a un servidor.
    Hay varias maneras de crear ese objeto que tiene 2 métodos, con JS. Pero vamos a ver
    el enfoque que se utiliza en Angular
*/

var createWorker = function() {

    //sintaxis literal de JS para devolver un objeto con algún método asociado
    return {
        job1: function(){

        }
    };
};

var worker = createWorker();
worker.job1();
worker.job2();