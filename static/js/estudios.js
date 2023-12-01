function mostrarestudios() {

    var Estudios = document.getElementById("Estudios")
    var resultado_estudios = document.getElementById("resultado_estudios")

    
    if (Estudios.value == "0") {
        resultado_estudios.textContent = "";
    } else if (Estudios.value == "Bachiller") {
        resultado_estudios.innerHTML = `
        <div class="contenedor" style="top: auto">
            <img src="../static/images/diploma.png" class="icons_links">
            <a class="texto_alineado" href="https://drive.google.com/file/d/1LmFCsiPwkuEgZgXhDQP6CXIyorJn--Zv/view?usp=drive_link" target="_blank" style="text-decoration: none; pointer-events: auto;">
                <p style="color: blueviolet;"><b>Diploma Bachiller</b></p>
            </a>
        </div>
        `;
    } else if ( Estudios.value == "Sena") {
        resultado_estudios.innerHTML = `
    <div class="contenedor" style="top: auto">
        <img src="../static/images/diploma.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/1HB29bCxcQL7hYbLh1brOXC0hKAMs_7bN/view?usp=drive_link" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Diploma Tecnica</b></p>
        </a>
    </div>
        
    <div class="contenedor" style="top: auto">
        <img src="../static/images/diploma.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/10G5Aq81Bq6A7Ffdu96bIMNJIJVC-v7qS/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Ingles #1</b></p>
        </a>
    </div> 

    <div class="contenedor" style="top: auto">
        <img src="../static/images/diploma.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/11iYqOhsxm2SJ1mXG10ThA7IyrlJabqlR/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Ingles #2</b></p>
        </a>
    </div>

    <div class="contenedor" style="top: auto">
        <img src="../static/images/diploma.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/1bt1IkVdg2BQljgzQj9eEoy2F20ksxkft/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Ingles #3</b></p>
        </a>
    </div>
        
        `;
    } else if ( Estudios.value == "Platzi") {
        resultado_estudios.innerHTML = `
    <div class="contenedor" style="top: auto">
        <img src="../static/images/desarrollo_icon.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/13uZbJdc6vDbNMC7gBgXrpg8_wXRa27g1/view?usp=drive_link" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Diploma Terminal y linea de comandos</b></p>
        </a>
    </div>

    <div class="contenedor" style="top: auto">
        <img src="../static/images/desarrollo_icon.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/18ESNs0dXdHcTCQwrZxocUPJ839-pNSJo/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Diploma Fundamentos de Python</b></p>
        </a>
    </div>

    <div class="contenedor" style="top: auto">
    <img src="../static/images/desarrollo_icon.png" class="icons_links">
    <a class="texto_alineado" href="https://drive.google.com/file/d/1OFCfOlUXmk_wgxHhI9rY1Hpcv2dBsHse/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
        <p style="color: blueviolet;"><b>Diploma Python PIP y entornos virtuales</b></p>
    </a>
    </div>

    <div class="contenedor" style="top: auto">
        <img src="../static/images/desarrollo_icon.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/1CA_Iiq1G-eLHQv4_oh_x_TI6FZC8gLJ8/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Diploma Python: Comprehensions, funciones y manejo de errores </b></p>
        </a>
    </div>

    <div class="contenedor" style="top: auto">
        <img src="../static/images/desarrollo_icon.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/1KFN79x428pBA8Odp-A7646JL5WrkfT6T/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Diploma Git y GitHub</b></p>
        </a>
    </div>

    <div class="contenedor" style="top: auto">
        <img src="../static/images/desarrollo_icon.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/15lacUP05IQVHwa5dXuGSlQ0jokjkZIkg/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Diploma FastAPI</b></p>
        </a>
    </div>

    <div class="contenedor" style="top: auto">
        <img src="../static/images/desarrollo_icon.png" class="icons_links">
        <a class="texto_alineado" href="https://drive.google.com/file/d/1QypQL6dOvB4MDbZ9rBk5wBM_icUZ87vG/view?usp=sharing" target="_blank" style="text-decoration: none; pointer-events: auto;">
            <p style="color: blueviolet;"><b>Diploma introduccion al backend</b></p>
    </a>
    </div>

        `;
    }
}