// Funciones

// Expresadas

// funcionDeclarada();
// funcionExpresada();

// declaro la funcion
const funcionExpresada = function(nombre){
    console.log('esta es una funcion expresada ' + nombre);
}


let funcionExpresada2 = function(nombre){
    console.log('esta es una funcion expresada ' + nombre);
}

// funcionExpresada('Juan');
// funcionExpresada2('Mica');

// funcionExpresada = 'buenos dias';
//  funcionExpresada2 = 'buenos dias';
//  console.log(funcionExpresada2);



// funcionExpresada();

// Declaradas

// function funcionDeclarada(){
//      console.log('esta es una funcion declarada');
// }

// funcionDeclarada();


// Arrow


const funcionFlecha1 = () => 'hola ';
const funcionFlecha2 = nombre => 'hola ' + nombre;
const funcionFlecha3 = (nombre, apellido) => 'hola ' + nombre + apellido;

// Scope Global
let mensaje = 'soy una variable global';

// console.log(mensaje);

function scopeLocal(){
    let mensaje = 'soy una variable local';
    return mensaje;
}

let mensajeLocal = scopeLocal();

console.log(mensajeLocal);

// console.log(mensaje);