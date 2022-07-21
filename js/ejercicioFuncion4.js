/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaMultiplicar (numero){
if(isNaN(numero)===false){
for(let multiplo=1; multiplo<11; multiplo++){
    document.write(`${numero} x ${multiplo} = ${numero*multiplo} <br>`)
}
}else{
    alert("Lo ingresado no es válido")
}
}
tablaMultiplicar(numero=parseInt(prompt("Ingrese un numero")));
       
