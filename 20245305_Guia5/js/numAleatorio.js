
const numAleatorio = Math.floor(Math.random() * 25) + 1;

const numIntentos = 3;

let intentos = 1;



function generarNumAleatorio() 
{
    let mensaje;

    const parrafo = document.querySelector("#idParrafo");

    if (intentos <= numIntentos) {
        let numero = prompt(
            "¿Que número se ha generado (intento " + intentos + ")?"
        );

        if (numero == numAleatorio)
        {
            mensaje =  "Felicidades, " + numero + " es el número correcto."
        } else if (intentos == numIntentos) {
            mensaje = "Sin más intentos. Número era: " + numAleatorio
        } else {
            mensaje = "Intenta de nuevo. Quedan " + (numIntentos - intentos) + " intentos.";

            if (numero > numAleatorio) {
                mensaje +=  " " + numero + " es mayor al número aleatorio.";
            } else if (numero < numAleatorio) {
                mensaje +=  " " + numero + " es menor al número aleatorio.";
            }
        }

        intentos++;
    } else {
        mensaje = "Numero de intentos terminado Número era: " + numAleatorio;
    }

    parrafo.innerHTML = mensaje;
}