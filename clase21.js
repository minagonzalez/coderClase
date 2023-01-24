// Declarar una matriz de 5 x 6  --> 5 filas x 6 columnas
// FC !!!!!!!!!!!!!!!!!


// let matriz = [
//     [1,2,3,4,5,6],
//     [4,5,6,5,4,5], // fila 2 indice 1
//     [8,5,4,7,5,6],
//     [9,6,5,8,4,5],
//     [4,5,2,3,6,5]
// ];
// matriz.length --> 5

// declarar una funcion que reciba la matriz por parametro 
//y que multiplique todos los valores de la fila 2 por 3.

// function multiplicarFilas(arr, nroFila){

//     for(let i = 0; i < arr[nroFila].length; i++){ // 6 veces
//         arr[nroFila][i] *= 3;
//     }

// }

// multiplicarFilas(matriz, 3);
// console.table(matriz);


// declarar una funcion que reciba a la matriz por parametro
// y que retorne la multiplicacion de una columna pasada por parametro

// let matriz = [
//     [1,2,3,4,5,6],
//     [4,5,6,5,4,5], // fila 2 indice 1
//     [8,5,4,7,5,6],
//     [9,6,5,8,4,5],
//     [4,5,2,3,6,5]
// ];


// TERMINA CON THHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH 


// function multiplicacionColumna(arr, nroCol){

//     let acumulador = 1;

//     for(let i = 0; i < arr.length; i++){ 
//         if(arr[i][nroCol] % 2 === 0){
//             acumulador = acumulador * arr[i][nroCol];
//         }
        
//     }

//     return acumulador;
// }

// console.log(multiplicacionColumna(matriz, 1));


let matriz = [
    [1,2,3,4,5,6],
    [4,5,6,5,4,5], // fila 2 indice 1
    [8,5,4,7,5,6],
    [9,6,5,8,4,5],
    [4,5,2,3,6,5]
];



// declarar una funcion que reciba a la matriz por parametro que devuelva la suma de todos los valores que sean 
// pares y multiplos de 6
// o impares y multiplos de 3

function ultimoEjercicioYMeVoy(arr){
    let acumulador = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 6 === 0 || (arr[i][j] % 2 !== 0 && arr[i][j] % 3 === 0) ){
                acumulador = acumulador + arr[i][j];
            } 
        }
    }

    return acumulador;
}


console.log(ultimoEjercicioYMeVoy(matriz));
