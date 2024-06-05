//If Else

//Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var numAleatorio = Math.random();
if (numAleatorio >= 0.5) {
    alert("Mayor a 0.5");
} else {
    alert("Menor que 0.5");
}


//Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//i.“Bebe” si la edad es menor a 2 años; ii.“Niño” si la edad es entre 2 y 12 años; iii. “Adolescente” entre 13 y 19 años; iv. “Joven” entre 20 y 30 años;
//v.“Adulto” entre 31 y 60 años; vi. “Adulto mayor” entre 61 y 75 años; vii. “Anciano” si es mayor a 75 años

var edad = 25;
if (edad < 2) {
    alert("Bebé");
} else if (edad >= 2 && edad <= 12) {
    alert("Niño");
} else if (edad >= 13 && edad <= 19) {
    alert("Adolescente");
} else if (edad >= 20 && edad <= 30) {
    alert("Joven");
} else if (edad >= 31 && edad <= 60) {
    alert("Adulto");
} else if (edad >= 61 && edad <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}
