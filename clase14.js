// // 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",  [12, 15]
//       edadesMayor : "// edades mayor o igual a 18" [18, 33, 26, 24, 59]
//    }


//  let edades2 = [12, 15, 18, 33, 26, 24, 59];


function filtrarEdades(arr){

    let objEdades = {
        edadesMenores: [],
        edadesMayores: []
    };

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 18){
            objEdades.edadesMenores.push(arr[i]);
        } else{
            objEdades.edadesMayores.push(arr[i]);
        }
    }

    return objEdades;

}



// let resultadoEj1 = filtrarEdades(edades);

// console.log(resultadoEj1);


// let edades = [-12, -15, -18, -13, -26, -24, -59];

// declarar una funcion que reciba un array por parametro y me devuelva/retorne el numero mayor

let edades2 = [12, 15, 18, 33, 26, 24, 59];

function encontrarElMayor(arr){

    let elMayor = null;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > elMayor){ 
            elMayor = arr[i]; 
        }
    }

    return elMayor;
}

console.log(encontrarElMayor(edades2));






// declarar una funcion que le sume 1 a los mayores a 18 del array edades2

// function agregarUno(){

//     for(let i = 0; i < edades2.length; i++){
//         if(edades2[i] > 18){
//            edades2[i] = edades2[i] + 1;
//         }
//     }

// }


// console.log('antes de la ejecucion ', edades2);

// agregarUno();

// console.log( 'despues de la ejecucion ',edades2);