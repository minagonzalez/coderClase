


let nombre = 'mina';
let edad = 30;
let bool = true;
let array = [1,2,3,6,4,1];
let objeto = {
    prop1: 'holaa',
    prop2: 125,
    array: ['fede', 'lucas']
}


// Declarar una funcion que reciba dos numeros por parametro, 
// -si ambos son pares, retornar/devolver la suma de ambos
//- si el primero es impar retornar la multiplicacion
// sino retornar retornar false


// function funcionRepaso2(){

//     if( 6 % 2 === 0 && 8 % 2 === 0){
//         return n1 + n2;
//     } else if( 4 % 2 !== 0){
//         return n1 * n2;
//     } else {
//         return false;
//     }
// }

// funcionRepaso2();


function funcionRepaso(n1, n2){

    if( n1 % 2 === 0 && n2 % 2 === 0){
        return n1 + n2;
    } else if( n1 % 2 !== 0){
        return n1 * n2;
    } else {
        return false;
    }
}



// console.log(funcionRepaso(6,6))
// console.log(funcionRepaso(7,6))
// console.log(funcionRepaso(6,1))


// declarar una funcion que agregue a un nuevo array los numeros pares del 1 al 50


function mostrarNumeros(){

    let nuevoArray = [];

    for(let i = 1; i <= 50; i++){ // del 1 al 50 
       
        if( i % 2 === 0){
            nuevoArray.push(i);
        }
    }

     return nuevoArray;

}


// console.log(mostrarNumeros());
// mostrarNumeros();


//  corchetes [],  llaves {}, parentesis ()
// propiedades y metodos 
// metodos: funciones que pertenecen a un objeto


let persona = {
    nombre: 'Fredy',
    apellido: 'Ospina',
    edad: 25,
    hermanos: ['fede', 'mica'],
    sonido: 'punchi punchi',
    hacerSonido: function(){
        return this.sonido;
    }
}

// console.log(persona.sonido);
// console.log(persona.apellido);
// console.log(persona.hacerSonido());
// console.log(persona.hermanos[1]);
// persona.hermanos.push('ana');

// persona.dni = 15468465;
// persona.nombre = 'Jorge';
// persona.hermanos[0] = 'Javier';
// console.log(persona);





/* EJERCITACION ARRAY DE PROFESIONALES */
const arrayProfesionales = [
    {
      id: 0,
      estaHabilitado: false,
      nombre: "Huber Wilkins",
      email: "huberwilkins#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 3,
    },
    {
      id: 1,
      estaHabilitado: true,
      nombre: "Goldie Haley",
      email: "goldiehaley#speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 3,
    },
    {
      id: 2,
      estaHabilitado: false,
      nombre: "Pena Landry",
      email: "penalandry@speedbolt.com",
      especialidad: "Dermatologia",
      cantidadConsultas: 9,
    },
    {
      id: 3,
      estaHabilitado: false,
      nombre: "Leanne Burch",
      email: "leanneburch#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 13,
    },
    {
      id: 4,
      estaHabilitado: false,
      nombre: "Haynes Fuentes",
      email: "haynesfuentes@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 75,
    },
    {
      id: 5,
      estaHabilitado: true,
      nombre: "Tamika Fuentes",
      email: "tamikanewman@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 32,
    },
    {
      id: 6,
      estaHabilitado: true,
      nombre: "Russo Baldwin",
      email: "russobaldwin@speedbolt.com",
      especialidad: "Dermatologia",
      cantidadConsultas: 67,
    },
    {
      id: 7,
      estaHabilitado: true,
      nombre: "Dodson Shaffer",
      email: "dodsonshaffer#speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 2,
    },
    {
      id: 8,
      estaHabilitado: true,
      nombre: "Guerra Bright",
      email: "guerrabright#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 6,
    },
    {
      id: 9,
      estaHabilitado: true,
      nombre: "Dina Navarro",
      email: "dinanavarro@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 8,
    },
    {
      id: 10,
      estaHabilitado: false,
      nombre: "Stafford Watts",
      email: "staffordwatts@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 0,
    },
    {
      id: 11,
      estaHabilitado: false,
      nombre: "Joni Avery",
      email: "joniavery@speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 6,
    },
    {
      id: 12,
      estaHabilitado: true,
      nombre: "Mayra Tran",
      email: "mayratran@speedbolt.com",
      especialidad: "Oftamologia",
      cantidadConsultas: 2,
    },
    {
      id: 13,
      estaHabilitado: false,
      nombre: "Ward Dale",
      email: "warddale@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 23,
    },
];



// arrayProfesionales[4].nombre = 'Nuevo nombre';
// console.log(arrayProfesionales);


// Declarar una funcion que reciba por parametro un array y un id 
// y me devuelva ese objeto


function buscarPorId(arr, nroId){

    for(let i = 0; i < arr.length; i++){ // i = 3
        if( nroId === arr[i].id){
            return arr[i];
        }
    }
    
}


console.log(buscarPorId(arrayProfesionales, 8)); 

//   {
//     id: 5,
//     estaHabilitado: true,
//     nombre: 'Tamika Fuentes',       
//     email: 'tamikanewman@speedbolt.com',
//     especialidad: 'Cardiologia',    
//     cantidadConsultas: 32
//   }