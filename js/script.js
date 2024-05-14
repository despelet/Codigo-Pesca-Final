const avisos = document.querySelectorAll(".aviso")

avisos.forEach(aviso => {
    aviso.addEventListener("click", (event)=> {
        event.preventDefault(),
        alert("Proximamente...")}
    )
})
   
