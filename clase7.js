// Condicionales 

// if else 

// let a = 100; // scope global
// let b = 100;


// function miFuncion(a, b){

//     if( (a > b) || (a % 2 !== 0) ){
//         return 'a es mayor a b';
//     } else if( a === b ){
//         return 'a es igual a b';
//     } else {
//         return ' b es mayor que a';
//     }
    
// }

// console.log(miFuncion(10, 5));



// Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:
// Debe medir más o igual de 1,40m y menos de 2 metros.
// Si mide menos de 1,40m hasta 1,20m, deberá venir acompañado.
// Si mide menos de 1,20m, no podrá subir ni acompañado.


function puedeSubir(altura, vieneAcompaniada){

    if( altura >= 140 && altura < 200 ){
        return 'estoy en la primer condicion';
    }else if( altura < 140 && altura >= 120 && vieneAcompaniada === true){
        return 'segunda condicion';
    } else {
        return false;
    }    

}


console.log(puedeSubir(210, true));