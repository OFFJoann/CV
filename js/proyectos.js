function mostrarproyectos() {

    var seleccion = document.getElementById("Proyectos")
    var resultado = document.getElementById("resultado_proyectos")

    
    if (seleccion.value == "SNMPMKK.py") {resultado.innerHTML= '';
        resultado.innerHTML = `
    <div class="contenedor" style="top: auto">
        <img src="../CV/img/python.png" class="icons_links">
        <a class="texto_alineado" href="https://github.com/OFFJoann/pythongame-py" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: #6b4d87;"><b>SNMPMKK.py</b></p>
        </a>
    </div>
    `;
    } else if (seleccion.value == "BKsecure.sh") {
        resultado.innerHTML =`
    <div class="contenedor" style="top: auto">
        <img src="../CV/img/bash.png" class="icons_links">
        <a class="texto_alineado" href="https://github.com/OFFJoann/automaticbash_backup.sh" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: #6b4d87;"><b>BKsecure.sh</b></p>
        </a>
    </div>
        `
    } else if (seleccion.value == "0") {
        resultado.textContent = "";
    }

}
