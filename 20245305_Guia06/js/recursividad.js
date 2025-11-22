
const campo = document.getElementById("idTxtNumero");

const validarNumero = function (e) {
    let validar = /^[0-9]{1}$/;
    let tecla = e.key;

    if (!validar.test(tecla)) e.preventDefault();
};

campo.addEventListener("keypress", validarNumero);

const boton = document.getElementById("idBtnCalcular");

const calcularFactorial = (numero) => {
    return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
};

const impimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

function calcular() {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero != "") {
        let resultado = calcularFactorial(numero);
        impimir(numero, resultado);
    } else {
        alert("Debe ingresar un numero válido");
    }
}

boton.addEventListener("click", calcular);