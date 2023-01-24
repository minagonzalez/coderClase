
//Ejercicio1//

let personas = [
    {
        nombre : "Raul",
        edad : 25
    },
    {
        nombre : "Jose",
        edad : 9
    },
    {
        nombre : "Mina",
        edad : 7
    },
    {
        nombre : "Lucas",
        edad : 15
    },
    {
        nombre : "Jorge",
        edad : 32
    },
    {
        nombre : "Luciano",
        edad : 26
    },
    {
        nombre : "Lucrecia",
        edad : 75
    },
]

let edades = []



function filtrarEdades(arr){

    for(let i = 0; i < arr.length; i++){
       
       if(arr[i].edad >= 26) {
       edades.push(arr[i].edad);
    }

    }

    return edades;
}

var result = filtrarEdades(personas)



console.log(result)



//ejercicio 2//


var edades2 = []
for(let i = 0; i < personas.length; i++){
     edades2.push(personas[i].edad)
}


function ordernarDeMenorAMayor(arr) {

    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length - 1; j++) {  
            if(arr[j] > arr[j + 1]){ 
                 let temp = arr[j]; 
                 arr[j] = arr[j + 1]; 
                 arr[j + 1] = temp; 
            }
        }
    }   

}

function ordernarDeMayorAMenor(arr) {

    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length - 1; j++) {  
            if(arr[j] < arr[j + 1]){ 
                 let temp = arr[j]; 
                 arr[j] = arr[j + 1]; 
                 arr[j + 1] = temp; 
            }
        }
    }   

}

function bubbleSort(arr, str){
    if(str == "ASC"){
        ordernarDeMenorAMayor(arr)
        console.log(arr)
    }
    else if(str == "DESC"){
        ordernarDeMayorAMenor(arr)
        console.log(arr)
    }
}

console.log(edades2)
bubbleSort(edades2, "DESC");

//Ejercicio3

let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]


function sumaMatrix(arr, col) {
    let aux = 0
    for(let i = 0; i<arr[col].length; i++){
        aux += matriz[col][i];
    }
    return aux;
}

sumaMatrix(matriz, 2); 

function pares(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if (arr[i][j] % 2 != 0){
               arr[i][j] = 0;
            } 
        }
    }
    console.log(arr)
    return arr;
}

var suma = sumaMatrix(matriz, 2); 
console.log(suma);
pares(matriz);