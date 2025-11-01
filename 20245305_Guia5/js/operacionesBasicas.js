const parrafo = document.querySelector("#idParrafo");
console.log(parrafo);

const btnSumar = document.querySelector("#idBtnSumar");
const btnRestar = document.querySelector("#idBtnRestar");
const btnMultiplicar = document.querySelector("#idBtnMultiplicar");
const btnDividir = document.querySelector("#idBtnDividir");

btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", divi)

function sumar() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a sumar"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a sumar"));

    resultado = numero1 + numero2;

    parrafo.innerHTML =  numero1 + " + " + numero2 + " = " + resultado;

}

function restar() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a restar"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a restar"));

    resultado = numero1 - numero2;

    parrafo.innerHTML =  numero1 + " - " + numero2 + " = " + resultado;
}

function multiplicar() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a multiplicar"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a multiplicar"));

    resultado = numero1 * numero2;

    parrafo.innerHTML =  numero1 + " x " + numero2 + " = " + resultado;

}

function dividir() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a dividir"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a dividir"));
    let mensaje;

    if (numero2 == 0) {
        mensaje = "El valor ${numero1} / ${numero2} no se puede dividir";
        return;
    }

    resultado = numero1 / numero2;
    mensaje =  numero1 + " / " + numero2 + " = " + resultado;

    parrafo.innerHTML = mensaje;
}