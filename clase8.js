// Ciclos


// declarar una funcion que imprima 10 numeros por consola, del 1 al 10


function mostrarNumeros(){
    for(let i = 1; i <= 10; i++){
        console.log(i); 
    }
}



// mostrarNumeros();



function noParesDeContarImparesHasta(numero){

    let acumulador = 0;

    for(let i = 0; i <= numero; i++){ // i = 0
       
        if( i % 2 !== 0 ){ 
          acumulador++;
        }
    }

    return acumulador;
}



console.log(noParesDeContarImparesHasta(12));