const avisos = document.querySelectorAll(".aviso")

avisos.forEach(aviso => {
    aviso.addEventListener("click", (event)=> {
        event.preventDefault(),
        alert("Proximamente...")}
    )
})
   
function valFormulario() {
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "" || nombre.lenght == 0) {
        alert("No puede dejar vacío el espacio Nombre");
        return false;
    } else {
        alert("REGISTRACIÓN exitosa");
    }
    }

    const enviarMensaje = () => alert("ATENCIÓN: Esta acción borrará todos los cambos. ¿Confirma?")

