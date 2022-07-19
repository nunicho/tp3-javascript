/*
2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
        ● Mostrar la longitud del arreglo.
        ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
        última.
        ● Añade en última posición la ciudad de París.
        ● Escribe por pantalla el elemento que ocupa la segunda posición.
        ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
        'Barcelona'.
*/  
// Creamos el script.
let ciudades =[] 
let ciudad


while (confirm("Presiona ACEPTAR para ingresar Ciudades") == true) {
    ciudades;
    ciudad=prompt("Ingresa el nombre de la ciudad");
    ciudades.push(ciudad);
}
document.write("<h5>El listado de ciudades ingresado es</h5><br>")
document.write(`<ul>`);
for(let indice=0; indice < ciudades.length; indice++){
document.write(`<ul><li>${ciudades[indice]}</li></ul>`);
}
document.write(`</ul>`);

//Mostramos la longitud
document.write("<h5>La longitud del arreglo es: </h5>" + ciudades.length+"<br>")


//Mostrar¿mos en el documento web los ítems de las posiciones primera, tercera y última.

document.write("<h5>La ciudad en la primera posición es: </h5>" + ciudades[0]+"<br>")
document.write("<h5>La ciudad en la tercera posición es: </h5>" + ciudades[2]+"<br>")
document.write("<h5>La ciudad en la ultima posición es: </h5>" + ciudades[ciudades.length-1]+"<br>")

//Agregamos la ciudad de París. 
document.write("<h5>Se añade en última posición la ciudad de París </h5> <br>")
ciudades.push("París");
document.write(`<ul>`);
for(let indice=0; indice < ciudades.length; indice++){
document.write(`<ul><li>${ciudades[indice]}</li></ul>`);
}
document.write(`</ul>`);

//Escribimos  el elemento que ocupa la segunda posición.
document.write("<h5>Ahora, la ciudad en la segunda posición es: </h5>" + ciudades[1]+"<br>")

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
document.write("<h5>Se sustituye el elemento que ocupa la segunda posición por la ciudad 'Barcelona' </h5> <br>")
ciudades[1]="Barcelona"
document.write(`<ul>`);
for(let indice=0; indice < ciudades.length; indice++){
document.write(`<ul><li>${ciudades[indice]}</li></ul>`);
}
document.write(`</ul>`);

