// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1] 

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arr = [];
  for (var index = 0; index < array.length; index++) {
    arr.push(array[index] + 1)
  }
  return arr;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:ç
  array.push(elemento)
  {return array;}
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  {return array;}
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = "";
  for (let index = 0; index < palabras.length; index++) {
    str = str + palabras[index] + " "
  }
  return str.slice(0, -1)
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 
  for (let index = 0; index < array.length; index++) {
    if(array[index] === elemento) {
      return true;
    }
  }
  return false;
  }



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (let index = 0; index < numeros.length; index++) {
    suma = suma + numeros[index]
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = 0; //10
  for (var index = 0; index < numeros.length; index++) {
    if(numeros[index] > masGrande) {
      masGrande = numeros[index]
    }
  }
  return masGrande;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  var array = []; 
  for (let index = 0; index <= 10; index++) {
        array.push(6 * index)
  }
  return array; 
  
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) {
    return 0;
  }
  if(arguments.length === 1) {
    return arguments[0]
  }
  var producto = 1; //X
  for (let index = 0; index < arguments.length; index++) {
    producto = producto * arguments[index];    
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var resultado = 0; //3 
  for (let index = 0; index < arreglo.length; index++) {
    if(arreglo[index] > 18) {
      resultado = resultado + 1;
    }    
  }
  return resultado;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y  en caso contrario. 
  //Escribe tu código aquí   
  // if(numeroDeDia === 1 || numeroDeDia === 7) {
  //   return "Es fin de semana";
  // } else {return "Es dia Laboral";}

  if(numeroDeDia == 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n.toString() //950 --> "950"      1000  num[0] [9, 5, 0]
  if(num[0] === "9") {
    return true;
  }
  return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for (var index = 0; index < arreglo.length -1; index++) {
    if(arreglo[index] !== arreglo[index + 1]) {
      return false;
    }
  }
  return true;
} 
// [1, 10, 50, 50]
//          i  +1
  



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for (let index = 0; index < array.length; index++) {
    if(array[index] === "Enero" || array[index] === "Marzo" || array[index] === "Noviembre") {
      nuevoArray.push(array[index])
    }    
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
    return nuevoArray;
  }
}
//["enero", "marzo", "noviembre", "otroelemento", "hola"] 
//             i     



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arr = [];
  for (let index = 0; index < array.length; index++) {
    if(array[index] > 100) {
      arr.push(array[index])
    }    
  }
  return arr;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero; //8
  for (var index = 0; index < 10; index++) {
    suma = suma + 2;    
    if(suma === index) {
      break; //Terminar con el ciclo for, NO con la función.
    }
    else{
      array.push(suma);
    }
  }  //---------
  if(index < 10) {
    return "Se interrumpió la ejecución";
  }
  else {
    return array;
  }
}
// 2
// [4, 6, 3]
// i = 8



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var otroArray = [];
  var suma = numero;
  for (let index = 0; index < 10; index++) { //i = 6
    if(index === 5) {
      continue;  //Pasa a la siguiente iteración del ciclo.
    }    
    else {
      suma = suma + 2;
      otroArray.push(suma)
    }
  }
  return otroArray;
  
    }
    
  



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
