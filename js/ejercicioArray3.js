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

  const counts = {};
    for (const num of apariciones) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
document.write("El número 2 aparece: "+counts[2] +" veces. El número aparece el " +Math.round(counts[2]/apariciones.length *100)+"% del total de resultados <br>")
document.write("El número 3 aparece: "+counts[3] +" veces. El número aparece el " +Math.round(counts[3]/apariciones.length *100)+"% del total de resultados <br>") 
document.write("El número 4 aparece: "+counts[4] +" veces. El número aparece el " +Math.round(counts[4]/apariciones.length *100)+"% del total de resultados <br>") 
document.write("El número 5 aparece: "+counts[5] +" veces. El número aparece el " +Math.round(counts[5]/apariciones.length *100)+"% del total de resultados <br>") 
document.write("El número 6 aparece: "+counts[6] +" veces. El número aparece el " +Math.round(counts[6]/apariciones.length *100)+"% del total de resultados <br>")   
document.write("El número 7 aparece: "+counts[7] +" veces. El número aparece el " +Math.round(counts[7]/apariciones.length *100)+"% del total de resultados <br>") 
document.write("El número 8 aparece: "+counts[8] +" veces. El número aparece el " +Math.round(counts[8]/apariciones.length *100)+"% del total de resultados <br>") 
document.write("El número 9 aparece: "+counts[9] +" veces. El número aparece el " +Math.round(counts[9]/apariciones.length *100)+"% del total de resultados <br>") 
document.write("El número 10 aparece: "+counts[10] +" veces. El número aparece el " +Math.round(counts[10]/apariciones.length *100)+"% del total de resultados <br>")
document.write("El número 11 aparece: "+counts[11] +" veces. El número aparece el " +Math.round(counts[11]/apariciones.length *100)+"% del total de resultados <br>")
document.write("El número 12 aparece: "+counts[12] +" veces. El número aparece el " +Math.round(counts[12]/apariciones.length *100)+"% del total de resultados <br>")




/*
Math.floor: Devuelve el máximo entero menor o igual a un número.

Para el conteo de números investigué en:
https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
*/