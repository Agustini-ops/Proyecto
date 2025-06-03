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

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault(); // evita que el formulario se envíe automáticamente
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var grado = document.getElementById("grado").value;
    var rol = document.getElementById("rol").value;
    var mesa = document.getElementById("mesa").value.trim();
    var pais = document.getElementById("pais") ? document.getElementById("pais").value.trim() : "";
    // validación básica
    if (!nombre || !apellido || !grado || !rol || !mesa || (rol === "delegado" && !pais)) {
        alert("Por favor, completa todos los campos obligatorios antes de enviar.");
        return; // detiene el envío si hay campos vacíos
    }
    // mensaje de éxito
    alert("¡Gracias por registrarte! Tus datos han sido enviados correctamente.");

    window.location.href = "index.html";
});
