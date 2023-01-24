// Ejercicio 1:

/* A. Que reciba por parámetro 2 números, y verifique que si uno de ellos es par, retorne la multiplicación de ambos, si ambos son pares, retorne la suma de ambos, si no hay ninguno par, que retorne ‘ninguno es par ‘. */

function verificadorPares(numero1, numero2) {
    let resultado;
    if (numero1 % 2 !== 0 && numero2 % 2 !== 0) {
      resultado = "ninguno es par";
    } else if (numero1 % 2 == 0 && numero2 % 2 == 0) {
      resultado = numero1 + numero2;
    } else {
      resultado = numero1 * numero2;
    }
    return resultado;
  }
  console.log(verificadorPares(2, 3)); // 6
  console.log(verificadorPares(4, 6)); // 10
  console.log(verificadorPares(5, 7)); // ninguno es par
  
  /* B. Que reciba por parámetro 1 número, le sume 20, y verifique que si ese resultado es múltiplo de 5, retorne la frase ‘[número] + 20 es múltiplo de 5’, sino, retornará ‘[número] + 20 no es múltiplo de 5’.  */
  
  function verificadorMultiplo(numero) {
    let mensaje;
    let resultado = numero + 20;
    if (resultado % 5 == 0) {
      mensaje = `${numero} + 20 es múltiplo de 5`;
    } else {
      mensaje = `${numero} + 20 no es múltiplo de 5`;
    }
    return mensaje;
  }
  console.log(verificadorMultiplo(20)); // 20 + 20 es múltiplo de 5
  console.log(verificadorMultiplo(13)); // 13 + 20 no es múltiplo de 5
  
  // Ejercicio 2:
  
  /* 1. Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades que deberás completar con tus datos:
      a. nombre
      b. apellido 
      c. edad
      d. tiene Bici (TRUE/FALSE) */
  
  let ciclista = {
    nombre: "David",
    apellido: "Raba",
    edad: 28,
    tieneBici: true,
  };
  
  /* 2. Teniendo en cuenta los datos del punto número 1.
      a. Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones : 
          - si edad es mayor o igual a 18 y tiene bici  “puede competir”
          - si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
          - si no tiene bici “No podrá competir ” 
  
  Deberás realizar la invocación de la función de forma que se pueda ver el resultado  */
  
  function competidorApto(objeto) {
    let notificacion;
    if (objeto.edad >= 18 && objeto.tieneBici == true) {
      notificacion = "puede competir";
    } else if (objeto.edad < 18 && objeto.tieneBici == true) {
      notificacion = "podrá competir pero con un adulto acompañante";
    } else if (objeto.tieneBici == false) {
      notificacion = "No podrá competir";
    }
    console.log(notificacion);
  }
  competidorApto(ciclista);
  
  // Ejercicio 3:
  
  /* 1. Crear un array VACÍO llamado competidores.  */
  let competidores = [];
  
  /* 2. Dados estos tres objetos	 */
  let competidor1 = {
    nombre: "Juan",
    edad: 42,
    kilometrosRecorridos: 80,
  };
  let competidor2 = {
    nombre: "Sofia",
    edad: 22,
    kilometrosRecorridos: 90,
  };
  let competidor3 = {
    nombre: "Maria",
    edad: 45,
    kilometrosRecorridos: 70,
  };
  
  /* a. Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar) */
  competidores.push(competidor1, competidor2, competidor3);
  
  /* b. Mostrar por consola el array para ver que contenga esos objetos.*/
  console.log(competidores);
  
  /* 3. Crea una función que reciba el array competidores como parámetro, e incremente en 100 la cantidad de kilómetros recorridos de cada uno de los competidores, llámala competencia100Km .
  Debes utilizar alguna estructura de repetición vista en la materia. */
  function competencia100Km(array) {
    for (let i = 0; i < array.length; i++) {
      array[i].kilometrosRecorridos += 100;
    }
  }
  competencia100Km(competidores);
  
  /* 4. Mostrar por consola el array de competidores antes y después de la ejecución de la función. */
  console.log(competidores);