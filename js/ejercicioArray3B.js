/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
*/

let apariciones=[];
let aleatorio1 
let aleatorio2 
let resultado

for (apariciones.length = 0; apariciones.length < 50; apariciones.length+1) {
    aleatorio1 = Math.floor(Math.random() * 6) + 1;
    aleatorio2 = Math.floor(Math.random() * 6) + 1;
    resultado=aleatorio1+aleatorio2
    apariciones.push(resultado)
  }
  document.write("<h5> Resultado de simular "+apariciones.length+" veces la tirada de dos dados:</h5> <br>")
  document.write(`<ul>`);
  for(let indice=0; indice < apariciones.length; indice++){
  document.write(`<ul><li>${apariciones[indice]}</li></ul>`);
  }
  document.write(`</ul`);

  document.write("<h3>Conteo de resultados</h3><br>");

const conteo = {};
    for (const num of apariciones) {
        conteo [num] = (conteo[num] || 0) + 1;
  }
document.write("El número 2 aparece: "+conteo[2] +" veces, y representa el " +Math.round(conteo[2]/apariciones.length *100)+"% del total de resultados obtenidos. <br>")
document.write("El número 3 aparece: "+conteo[3] +" veces, y representa el " +Math.round(conteo[3]/apariciones.length *100)+"% del total de resultados obtenidos. <br>") 
document.write("El número 4 aparece: "+conteo[4] +" veces, y representa el " +Math.round(conteo[4]/apariciones.length *100)+"% del total de resultados obtenidos. <br>") 
document.write("El número 5 aparece: "+conteo[5] +" veces, y representa el " +Math.round(conteo[5]/apariciones.length *100)+"% del total de resultados obtenidos. <br>") 
document.write("El número 6 aparece: "+conteo[6] +" veces, y representa el " +Math.round(conteo[6]/apariciones.length *100)+"% del total de resultados obtenidos. <br>")   
document.write("El número 7 aparece: "+conteo[7] +" veces, y representa el " +Math.round(conteo[7]/apariciones.length *100)+"% del total de resultados obtenidos. <br>") 
document.write("El número 8 aparece: "+conteo[8] +" veces, y representa el " +Math.round(conteo[8]/apariciones.length *100)+"% del total de resultados obtenidos. <br>") 
document.write("El número 9 aparece: "+conteo[9] +" veces, y representa el " +Math.round(conteo[9]/apariciones.length *100)+"% del total de resultados obtenidos. <br>") 
document.write("El número 10 aparece: "+conteo[10] +" veces, y representa el " +Math.round(conteo[10]/apariciones.length *100)+"% del total de resultados obtenidos. <br>")
document.write("El número 11 aparece: "+conteo[11] +" veces, y representa el " +Math.round(conteo[11]/apariciones.length *100)+"% del total de resultados obtenidos. <br>")
document.write("El número 12 aparece: "+conteo[12] +" veces, y representa el " +Math.round(conteo[12]/apariciones.length *100)+"% del total de resultados obtenidos. <br>")


/*
Math.floor: Devuelve el máximo entero menor o igual a un número.

Para el conteo de números investigué en:
https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements

Qué es una const
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const

For..of
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

*/

