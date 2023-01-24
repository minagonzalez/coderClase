// Objetos literales

// corchetes [] llaves {}

let persona = {
    nombre: 'Darwin',
    apellido: 'Sosa',
    edad: 17,
    esMayor: true, 
    hermanos: ['Juan', 'Sofi'],
    saludar: function(){
        // console.log(this);
        return 'buen dia ' + this.nombre;
    }
}

let persona2 = {
    nombre: 'Maria',
    apellido: 'Sosa',
    edad: 25,
    esMayor: true, 
    hermanos: ['Juan', 'Sofi'],
    saludar: function(){
        // console.log(this);
        return 'buen dia ' + this.nombre;
    }
}


let persona3 = {
    nombre: 'Darwin',
    apellido: 'Sosa',
    edad: 25,
    esMayor: true, 
    hermanos: ['Juan', 'Sofi'],
    saludar: function(){
        return 'buen dia ' + this.nombre;
    }
}

let miNuevoarray = [];
miNuevoarray.push(persona, persona2, persona3);
console.log(miNuevoarray);



// Declarar una funcion que reciba un objeto por parametro y que segun su edad si es mayor o igual de 18 imprimir por consola a sus hermanos y sino cambiar el valor esMayor por false


function puedePasar(obj){

    if(obj.edad >= 18){
       for(let i = 0; i < obj.hermanos.length; i++){
        console.log(obj.hermanos[i]);
       }
    } else {
        obj.esMayor = false;
        console.log(obj.esMayor);
    }
}



puedePasar(persona)

// puedePasar(persona2)
// puedePasar(persona3)





persona.nombre = 'Santiago';
persona.edad = 32;
persona.dni = 36214521;
persona.hermanos.push('Lau');
persona.nuevoMetodo = function(){
    return 'soy el nuevo metodo';
}


console.log(persona.nuevoMetodo());






// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.hermanos[1]);
// persona.saludar();
// // console.log(this);
