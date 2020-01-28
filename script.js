/* IIFE */
/*
    La función createWorker crea en JS lo que se conoce como escopo. Las variables que hemos 
    creado adentro de esa función sólo son visible adentro de ellas.
    Pero createWorker y worker son variables globales porque están definidas afuera de cualquier
    otro código, afuera de cualquier otra función.
    En JS las variables globales son muy malas, porque JS es un lenguaje dinámico y es muy fácil 
    anular una variables global.
    Como evitar las variables globales?
*/
var program  = function(){
    var createWorker = function() {

        var workCount = 0;
        
        var task1 = function(){
            workCount += 1;
            console.log("task 1 " + workCount);
        };
        
        var task2 = function(){
            workCount += 1;
            console.log("task 2 " + workCount);
        };

        
        return {
            job1: task1,
            job2: task2
        }
    };

    var worker = createWorker();
    worker.job1();
    worker.job2();
    worker.job2();
    worker.job2();
}

program();
