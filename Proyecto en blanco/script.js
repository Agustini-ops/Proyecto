function toggleNacion() {
    var rol = document.getElementById("rol").value;
    var paisContainer = document.getElementById("paisContainer");
    paisContainer.style.display = (rol === "delegado") ? "block" : "none";
}

function toggleGrados() {
    var grado = document.getElementById("grado").value;
    document.getElementById("grupos_primero").style.display = grado === "primer_grado" ? "block" : "none";
    document.getElementById("grupos_segundo").style.display = grado === "segundo_grado" ? "block" : "none";
    document.getElementById("grupos_tercero").style.display = grado === "tercer_grado" ? "block" : "none";
}

document.querySelector('.btn').addEventListener('click', function () {
    alert("Por favor completa tu registro para tu participación. Muchas gracias");
});