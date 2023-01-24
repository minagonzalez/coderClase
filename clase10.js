// Arrays

let miArray = [1, 2, 3, 4, 5, 6];
let miOtroArray = ['Sofi', 'Juan', 'Fede'];
let array = [true, false, true, false];
let arrayVariado = [2565, [1,2,5,4,6], miOtroArray, false, null];


// console.log(miOtroArray[1]);
// console.log(miArray.length);
// 6 elementos
// la ultima posicion es la nro 5

miOtroArray.push('Fernando');
// console.log(miOtroArray);
// console.log(miOtroArray.indexOf('Fede'));
// console.log(miOtroArray.includes('Fed'));

// miOtroArray.pop();
// miOtroArray.shift();
// console.log(miOtroArray);






// A partir de un array de correos, recorrerlo para corroborar si son válidos. Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y agregar aquellos que lo tengan al array de correos admitidos. En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.

// Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, agregar al arrayCorreoDescartados.

// Mostrar por pantalla la cantidad y los elementos de cada array.


let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com', 'thanosdigitalhouse.com','thanos@digitalhouse.com'
]; // 5 elementos ; ultima posicion del array = 4

  /* array de correos admitidos */

let arrayCorreosAdmitidos = [
       'thor@digitalhouse.com',
      'tucuMan@digitalhouse.com',
      'wanda@digitalhouse.com'
];


let arrayCorreosDescartados = [];


function verificarCorreos(array){
    
    let miNuevoArray = []; // scope local

    for(let i = 0; i < array.length; i++){ 
      
        if(array[i].includes('@')){
        arrayCorreosAdmitidos.push(array[i]);
      } else {
        arrayCorreosDescartados.push(array[i]);
      }

    }

}

// console.log(arrayCorreosAdmitidos);
// console.log(arrayCorreosDescartados);

verificarCorreos(arrayCorreosPendientes);

// console.log('Luego de ejecutar la funcion');

// console.log(arrayCorreosAdmitidos);
