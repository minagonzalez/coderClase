// cuándo usar console.log y cuando return ?

// qué hace el return? hay que usarlo siempre?

// // puedo modificar una variable global desde un scope local? y al reves?


// let mensaje; // scope global 

// function myFunction(){
//     mensaje = 'soy una variable local'; // scope local
// }


// myFunction();
// mensaje = 'chau te cambie todo';
// console.log(mensaje);


function myFunction2(){
    let mensaje2 = 'soy una nueva variable';
    return mensaje2;
}

console.log(myFunction2());

// let miNuevaVariable = myFunction2();
// console.log(miNuevaVariable);



function sumatoria(num){
    // console.log(num + 1)
    return num + 1;
}

// sumatoria(9);
// console.log(sumatoria(3)); 

// let sumar3 = sumatoria(3); // 4
// let sumar4 = sumatoria(4); // 5

















