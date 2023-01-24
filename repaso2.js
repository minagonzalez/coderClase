// Clase de repaso

// Declarar una matriz de 5 x 6 --> FC FELIZ CUMPLEAÑOS/ FUTBOL CLUB


// let matriz = [
//     [1,2,3,4,5,6], // 6 elementos
//     [7,8,9,4,5,6], // 6 elementos
//     [4,5,6,3,2,5], // posicionarme en la fila matriz[2][]
//     [7,8,5,4,6,9],
//     [5,6,9,8,8,4]
// ];

// console.table(matriz);
// console.log(matriz.length); // 5 cantidad de elementos 
// 4 es la ultima posicion 
// console.log(matriz[0][1]);

// declarar una funcion que reciba a la matriz por parametro y que recorra la fila 2 y multiplique todos sus valores por 3


// const recorrerFila = (arr, nroFila) => {

//     for(let i = 0; i < arr[nroFila].length; i++){ 
//         arr[nroFila][i] = arr[nroFila][i] * 3;
//     }

// }


// recorrerFila(matriz, 3);
// console.table(matriz);

// // declarar una funcion que reciba la matriz por parametro, que recorra una columna la cual recibira por parametro y retorne la multiplicacion de todos sus valores PARES.



// const multiplicarColumnas = (arr, nroCol) => {
    
//     let acumulador = 1;

//     for(let i = 0; i < arr.length; i++){ // se repite 5 veces
//         if(arr[i][nroCol] % 2 === 0){
//             acumulador *= arr[i][nroCol];
//         }
//     }

//     return acumulador;
// }

// console.log(multiplicarColumnas(matriz, 2));


let matriz = [
    [1,2,3,4,5,6], // 6 elementos
    [7,8,9,4,5,6], // 6 elementos
    [4,5,6,3,2,5], // posicionarme en la fila matriz[2][]
    [7,8,5,4,6,9],
    [5,6,9,8,8,4]
];


// declarar una funcion que reciba a la matriz por parametro y que sume todos los elementos que sean 
// - impares y multiplos de 5 
// - o pares y multiplos de 6

const sumarMatriz = (arr) => {
    let acumulador = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if( (arr[i][j] % 2 !== 0 && arr[i][j] % 5 === 0) ||  (arr[i][j] % 2 === 0 && arr[i][j] % 6 === 0)){
                acumulador += arr[i][j];
            }
        }
    }

    return acumulador;

}


// let matriz2 = [];

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];


// matriz2.push(arr1, arr2);
// console.table(matriz2);


