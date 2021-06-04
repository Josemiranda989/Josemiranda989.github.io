var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {
    if (estadoLicuadora=="apagada") {
        estadoLicuadora = "Encendido";
        licuadora.classList.add("active");
        hacerBrrBrr();
    } else {
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");
        hacerBrrBrr();
    }
}

function hacerBrrBrr (){
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime =0; /* Para que el sonido arranque de 0 */
    }
}