// Matrices 


// console.table(matriz);
// console.log(matriz[0][0]);
// console.log(matriz[0][1]);
// console.log(matriz[1][0]);
// console.log(matriz[1][1]);

// matriz[F][C] --> FC : FUTBOL CLUB, FELIZ CUMPLEAÑOS


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];


// matriz es un array de arrays, o sea un array bidimensional

// let nuevoArr = [];
// nuevoArr.push(arr1, arr2);
// console.table(nuevoArr);




// quiero recorrer por filas

// function recorrerPorFila(arr){

//     for(let i = 0; i < arr.length; i++){ 
//         console.log(arr[i]);
//     }
// }

// recorrerPorFila(matriz);



// function recorrerTodaLaMatriz(arr){

//     for(let filas = 0; filas < arr.length; filas++){ // filas

//        for(let columnas = 0; columnas < arr[filas].length; columnas++){ // columnas

//         console.log(arr[filas][columnas]);

//        }

//     }
// }


// recorrerTodaLaMatriz(matriz);


// matriz[0][0]
// matriz[0][1]
// matriz[0][2]
// matriz[1][0]
// matriz[1][1]
// matriz[1][2]
// matriz[2][0]
// matriz[2][1]
// matriz[2][2]



  function recorrerPorColumnas(arr, columna){

    for(let i = 0; i < arr.length; i++){ 
        console.table(arr[columna]);
    }

  }

recorrerPorColumnas(matriz, 1)
//matriz.length = 3
matriz[0].length = 2


let matriz = 
[
  [1,2],
  [3,4], 
  [5,6]  ];


function recorrerPorFila(arr, fila){

    for(let i = 0; i < arr[0].length; i++){ // 3 veces
        console.table(arr[fila][i]);
    }

  }

  recorrerPorFila(matriz, 2);