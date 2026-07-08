//======================================================
// JS-01 | ELEMENTOS
//======================================================

const sobre = document.getElementById("sobre");
const sello = document.getElementById("sello");
const tarjeta = document.getElementById("tarjeta");
const musica = document.getElementById("musica");

const textoAbrir = document.querySelector(".textoAbrir");

const flechaScroll = document.querySelector(".flechaScroll");

//======================================================
// JS-02 | ESTADO INICIAL
//======================================================

if(flechaScroll){

    flechaScroll.style.opacity = "0";

    flechaScroll.style.pointerEvents = "none";

}

//======================================================
// JS-03 | APERTURA DEL SOBRE
//======================================================

sello.addEventListener("click",()=>{

    // Ocultar sello

    sello.style.opacity="0";

    sello.style.pointerEvents="none";

    // Ocultar texto

    textoAbrir.style.opacity="0";

    // Cambiar sobre

    sobre.src="img/sobres/sobre-abierto.png";

    // Música

    musica.play().catch(()=>{});

    // Sacar portada

    setTimeout(()=>{

        tarjeta.style.opacity="1";

        tarjeta.style.transform="translate(-50%,320px)";

    },500);

    // Mostrar flecha

    setTimeout(()=>{

    flechaScroll.style.opacity="1";
    flechaScroll.style.pointerEvents="auto";

    document.getElementById("contador").style.display="flex";
    document.body.classList.remove("bloqueado");

   },1800);

});

/*======================================================
CUENTA REGRESIVA
======================================================*/

const fechaEvento = new Date("August 22, 2026 17:00:00").getTime();

const contador = setInterval(function () {

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").textContent =
        dias.toString().padStart(2, "0");

    document.getElementById("horas").textContent =
        horas.toString().padStart(2, "0");

    document.getElementById("minutos").textContent =
        minutos.toString().padStart(2, "0");

    document.getElementById("segundos").textContent =
        segundos.toString().padStart(2, "0");

    if (distancia < 0) {

        clearInterval(contador);

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

    }

}, 1000);