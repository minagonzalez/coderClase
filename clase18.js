// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.


// La idea es solo registrar el total de los gastos, al finalizar la jornada.

// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.

// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 

// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 




// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.


// c) Por último, es necesario tener el total de gastos realizados en el mes.

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.



// function gananciaTotal(arr){

//     let acumulador = 0;

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             acumulador += arr[i][j];
//         }
//     }

//     return acumulador;
// }

// console.log(gananciaTotal(enero));

// function gananciaPorDia(arr, nroDia){

//     let acumulador = 0;

//     for(let i = 0; i < arr.length; i++){ // se repite 4 veces
//         acumulador += arr[i][nroDia - 1];
//     }

//     return acumulador;
// }


// console.log(gananciaPorDia(enero, 3))

// function gananciaPorSemana(arr, nroSemana){

    
//     let acumulador = 0;

//     for(let i = 0; i < arr[nroSemana - 1].length; i++ ){ 
//         acumulador += arr[nroSemana - 1][i];
//     }

//     return acumulador;
// }

// // console.log(gananciaPorSemana(enero, 1));

// function semanaConMasGanancias(arr){

//     let semanaMayor = gananciaPorSemana(arr, 1);

//     for(let i = 2; i <= arr.length; i++){ 
//         let valorSemana = gananciaPorSemana(arr, i);
//         if( semanaMayor < valorSemana ){
//             semanaMayor = valorSemana;
//         }
//     }

//     return semanaMayor;

// }


// console.log(semanaConMasGanancias(enero));

// enero.length --> 4
// enero[1].length ---> 7
// console.log(enero[1].length)


function sumarLosPares(arr){

    let acumulador = 0;

    for(let i = 0; i < arr.length; i++){
        for( let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 3 === 0 && arr[i][j] % 2 === 0){
                acumulador += arr[i][j];
            }
        }
    }

    return acumulador;
}


let enero = [
    [20, 410, 63, 7454, 1200, 620, 45021], // semana 1 = fila nro 0
    [520, 4120, 632, 754, 1200, 6520, 4521], // semana 2 = fila nro 1
    [52, 410, 63, 75, 200, 620, 452000001],
    [520, 420, 62, 754, 100, 650, 421]
]