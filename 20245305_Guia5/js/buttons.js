function aviso() {
    alert("Bienvenido al mundo de JavaScript")
}

function confirmacion() {
    let confirmacion = confirm("¿Desea sali de la sesión?");

    alert("valor seleccionado " + confirmacion);
}

function capturarDatos() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuál es tu edad?", 0);

    alert("su nombre es " + nombre + " y su edad " + edad);
}

function dibujarParrafo() {
    let parrafo = prompt(
        "Escriba la informacion que desea visualizar en el parrafo"
    );

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}



