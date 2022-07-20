/*
2- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
*/

function indicadorDeLetras(texto){
    let resultado;
    if (texto === texto.toUpperCase()){
            resultado = ("Esta cadena de texto está formada sólo por MAYÚSCULAS.")
        }else if ((texto === texto.toLowerCase())){
            resultado = ("ESTA CADENA DE TEXTO ESTÁ FORMADA SÓLO POR minúsculas.")
        }
        else{
            resultado = ("EsTa CaDeNa De TeXtO mEzClA minúsculas y MAYÚSCULAS.")
        }
        alert (resultado)
    }
    
    indicadorDeLetras(texto=prompt("Ingrese un texto para saber cómo está compuesto"));
    
    
    