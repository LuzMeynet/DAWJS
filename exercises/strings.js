//Strings

//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var str1 = "ejercitando con el lenguaje interpretado javascript";
var str1Mayusculas = str1.toUpperCase();
console.log(str1);
console.log(str1Mayusculas);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var str2 = "Condicionales y Funciones";
var str2Cinco = longString.substring(0, 5);
console.log(str2);
console.log(str2Cinco);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var str3 = "Algoritmos";
var str3Tres = longString.substring(longString.length - 3);
console.log(str3);
console.log(str3Tres);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var str4 = "cOMPATIBLE CON BIBLIOTECAS COMO REACT Y ANGULAR";
var str4Modificado = longString.charAt(0).toUpperCase() + longString.slice(1).toLowerCase();
console.log(str4);
console.log(str4Modificado);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var str5 = "Soporta programación orientada a objetos";
var str5Espacio = longString.indexOf(" ");
console.log(str5);
console.log(str5Espacio);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var str6 = "Desarrolladores JavaScript";
var primeraPalabra = str6.substring(0, str6.indexOf(" ")).toLowerCase();
var segundaPalabra = str6.substring(str6.indexOf(" ") + 1).toLowerCase();
var palabrasFormateadas = primeraPalabra.charAt(0).toUpperCase() + primeraPalabra.slice(1) + " " +
                          segundaPalabra.charAt(0).toUpperCase() + segundaPalabra.slice(1);
console.log(str6);
console.log(palabrasFormateadas);console.log(str6);
