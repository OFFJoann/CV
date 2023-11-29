function mostrarseleccion() {

    var seleccion = document.getElementById("Experiencia")
    var resultado = document.getElementById("resultado")

    
    if (seleccion.value == "Teleperformace") {resultado.innerHTML= '';
        resultado.innerHTML = `
    <ul>
        <li><h1 style="font-size: medium; color: blueviolet;"><b>Teleperformace 2019-2020</b></h1></li>
            <ul>
            <li><p style="font-size: small;">Analista en sistemas</p></li>
            </ul>
        <li><h2 style="font-size: medium; color: blueviolet;">Funciones</h2></li>
            <ul>
            <li><p style="font-size: small;">Solución de problemas de aplicativos empresariales, servidores, telefonia, y de red, administración de active directory.</p></li>
            </ul>
    </ul>
    
    `;
    } else if (seleccion.value == "Creaciones Nadar S.A") {
        resultado.innerHTML =`
    <ul>
        <li><h1 style="font-size: medium; color: blueviolet;"><b>Creaciones Nadar S.A 2021-2023</b></h1></li>
            <ul>
            <li><p style="font-size: small;">Analista en sistemas</p></li>
            </ul>
        <li><h2 style="font-size: medium; color: blueviolet;">Funciones</h2></li>
            <ul>
            <li><p style="font-size: small;">Administrar infraestructura, dar soporte a nuestros clientes, implementar nuevas aplicaciones, metodologías de trabajo y establecer <br>procedimientos para asegurar que la infraestructura sea la mas optima, desarrollo y elaboración de políticas de seguridad basadas <br>en la normal ISO 27001, realizar campañas de phishing, manejo de Windows server y Linux, implementación de políticas en Fortinet <br>y Mikrotik, elaboración de VPN ipsec, SSL, administración de backups de servidores, uso de nmap para verificar puertos abiertos en la red.</p></li>
            </ul>
    </ul>
        `
    } else if (seleccion.value == "0") {
        resultado.textContent = "";
    }

}
