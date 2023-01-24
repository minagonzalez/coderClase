// Para ordenar una colección de objetos, según una propiedad específica, deberemos alterar el algoritmo de bubble sort que hasta ahora conocemos, ya que solo ordena un array de números, y en este caso, necesitaremos ordenar un array de objetos.

// En esencia, el algoritmo es el mismo, solo con un par de ajustes. Empecemos recordando la colección que queremos ordenar:



let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173,
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160,
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180,
    },
   ];
   


   function orderarPorEstatura(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j].estatura < arr[j + 1].estatura){
                arr[j], arr[j + 1] = arr[j + 1], arr[j];
            }
        }
    }
   }

//    console.log(personas);
   orderarPorEstatura(personas);
   console.log(personas); 


    // declarar una funcion que reciba por parametro un array y un booleano, si el booleano es true, ordenara el array ascendentemente y si es false, lo hara descendentemente



    function ordenarSegunBool(arr, bool){
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - 1; j++){
                if((bool && (arr[j].estatura > arr[j + 1].estatura) ) || (!bool && (arr[j].estatura < arr[j + 1].estatura)) ){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                } 
            }
        }
    }

    // ordenarSegunBool(personas, false);
    // console.log(personas);