// Clase de cierre 


// declarar una funcion que reciba 3 notas por parametro y devuelva el promedio de las mismas.

// 7 o más está aprobado
// 5 o 6 rinde recuperatorio
// menos que 5 no aprobó

function promedioNotas(a, b, c){
    
    let promedio = ((a + b + c) / 3);

    if(promedio < 5){
        return `No aprobado: su nota es ${promedio}` ;
    } else if(promedio >= 7){
        return `Estas aprobado su nota es ${promedio}`;
    } else {
        return `debe rendir recuperatorio su nota es ${promedio}`;
    }
    
}

console.log(promedioNotas(1,1,7)); 

// Elaborar un programa que permita ingresar un número entero y muestre la tabla de multiplicar de dicho número.

function mostrarTabla(num){
    
    let tabla = '';
    for(let i = 1; i <= 10; i++){
        // console.log( i + ' * ' + num + ' = ' + (i*num)); 
        tabla = tabla + `${i} * ${num} = ${i*num} \n`;
      
    }

    return tabla;

}


console.log(mostrarTabla(10));

// 1 * 4 = 4
// 2 * 4 = 8;
// 3 * 4 = 12;
// 4 * 4 = 16;
// 5 * 4 = 20;
// 6 * 4 = 24;
// 7 * 4 = 28;
// 8 * 4 = 32;
// 9 * 4 = 36;
// 10 * 4 = 40;