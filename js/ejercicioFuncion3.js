/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro es p = 2*(a +b)
*/

  
function perimetroRectangulo(base, altura){
    
    if (isNaN(base)===false && base>=0 && isNaN(altura) ===false && altura>=0){
        perimetro = 2*(base + altura)
        alert("El perímetro del rectángulo es igual a "+ perimetro+" .")
    }
    else if( isNaN(base)===false && base<0 || isNaN(altura) ===false && altura<0){
        perimetro = 2*(base + altura)
        alert(" Los valores de BASE y ALTURA tienen que ser mayores o iguales a 0.")
    }
    else {
        alert("Lo ingresado no es correcto.");
    }
}

perimetroRectangulo(base=parseFloat(prompt("Ingrese un valor para la BASE del rectángulo.")),
altura=parseFloat(prompt("Ingrese un valor para la ALTURA del rectángulo.")))


/*
Consideré que la función Perímetro no puede trabajar con valores negativos.

Usé la función parseFloat para que pueda considerar cifras con decimales.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

*/