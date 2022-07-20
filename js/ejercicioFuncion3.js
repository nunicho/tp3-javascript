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
    else if( isNaN(base)===false && base<=0 && isNaN(altura) ===false && altura<=0){
        perimetro = 2*(base + altura)
        alert("El perímetro del rectángulo es igual a "+ perimetro+" .")
    }
        else {
        alert("Lo ingresado no es correcto.");
    }
}

perimetroRectangulo(base=parseInt(prompt("Ingrese un valor para la BASE del rectángulo.")),
altura=parseInt(prompt("Ingrese un valor para la ALTURA del rectángulo.")))
