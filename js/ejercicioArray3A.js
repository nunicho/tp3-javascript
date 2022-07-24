/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
*/

let sumas = [];
let pruebaDado1 = [];
let pruebaDado2 = [];

for(let i=0; i<50; i++){
    let dado1 = Math.floor(Math.random()*(6 - 1 + 1)+1);
    let dado2 = Math.floor(Math.random()*(6 - 1 + 1)+1);
    let suma = dado1 + dado2
    sumas.push(suma);
    pruebaDado1.push(dado1);
    pruebaDado2.push(dado2);
}
document.write("Resultados del primer dado "+pruebaDado1);
document.write("<br>Resultados del segundo dado"+pruebaDado2);
document.write("<br>Resultado de la suma; "+sumas);

document.write(`<table><tbody>
<tr><td>Resultado</td><td>Frecuencia</td></tr>`)
for(let resultado =2; resultado <=12; resultado++){
    let contador=0;
    for(let posicion = 0; posicion < sumas.length; posicion++){
        if(resultado === sumas[posicion]){
            //sumar las apariciones
            contador++
        }
    }
    document.write(`<tr><td>${resultado}</td><td>${contador}</td></tr>`);
}
document.write(`</tbody></table>`)


/*
Math.floor: Devuelve el máximo entero menor o igual a un número.

Para el conteo de números investigué en:
https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
*/