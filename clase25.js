// METODOS DE ARRAYS


// Map --> recibe como parametro un callback y retorna un NUEVO ARRAY 


misNumeros = [2,16,51,4,70]; 


// Dado un array de numeros, declarar una funcion que reciba al array por parametro y que devuelva un nuevo array con sus dobles.


function misDobles(arr){
    let nuevoArray = [];

   for(let i = 0; i < arr.length; i++){
    nuevoArray.push(arr[i] * 2);
   }

   return nuevoArray;
}

let dobles = misNumeros.map(function(num){
    return num * 2;
});

console.log(dobles);

const triples = misNumeros.map( num => num * 3);


console.log(triples);

function misDoblesDePares(arr){
    let nuevoArray = [];

   for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        nuevoArray.push(arr[i] * 2);
        }
    }

   return nuevoArray;
}

const mayores = misNumeros.filter( edad => edad > 18);

console.log(mayores);

// find 

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

