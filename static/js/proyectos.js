function mostrarproyectos() {

    var seleccion = document.getElementById("Proyectos")
    var resultado = document.getElementById("resultado_proyectos")

    
    if (seleccion.value == "SNMPMKK.py") {resultado.innerHTML= '';
        resultado.innerHTML = `
    `;
    } else if (seleccion.value == "BKsecure.sh") {
        resultado.innerHTML =`

        `
    } else if (seleccion.value == "0") {
        resultado.textContent = "";
    }

}
