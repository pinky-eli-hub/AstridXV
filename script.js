// ======================
// CUENTA REGRESIVA
// ======================

const fechaXV = new Date("August 22, 2026 17:00:00").getTime();

const contador = setInterval(() => {

const ahora = new Date().getTime();

const distancia = fechaXV - ahora;

const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

const horas = Math.floor(
(distancia % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutos = Math.floor(
(distancia % (1000 * 60 * 60))
/
(1000 * 60)
);

const segundos = Math.floor(
(distancia % (1000 * 60))
/
1000
);

document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;

if (distancia < 0) {

clearInterval(contador);

document.getElementById("countdown").innerHTML =
"<h2>¡Hoy es el gran día!</h2>";

}

}, 1000);


// ======================
// LLUVIA DE PÉTALOS
// ======================

const contenedorPetalos =
document.querySelector(".petalos");

function crearPetalo(){

const petalo = document.createElement("div");

petalo.classList.add("petalo");

const iconos = [
"✨",
"💙",
"⭐",
"🔹",
"💫"
];

petalo.innerHTML =
iconos[Math.floor(Math.random() * iconos.length)];

petalo.style.left =
Math.random() * window.innerWidth + "px";

petalo.style.animationDuration =
(6 + Math.random() * 5) + "s";

petalo.style.fontSize =
(18 + Math.random() * 18) + "px";

contenedorPetalos.appendChild(petalo);

setTimeout(() => {
petalo.remove();
}, 12000);

}


setInterval(crearPetalo, 500);


// ======================
// ANIMACIÓN SUAVE
// ======================

const elementos =
document.querySelectorAll(
"section"
);

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0)";

}

});

},
{
threshold:0.2
}
);

elementos.forEach(sec => {

sec.style.opacity = "0";
sec.style.transform =
"translateY(40px)";

sec.style.transition =
"all 1s ease";

observer.observe(sec);

});


// ======================
// SCROLL SUAVE
// ======================

window.scrollTo({
top:0,
behavior:"smooth"
});

document.getElementById("abrirInvitacion").addEventListener("click", () => {

```
document.getElementById("intro").style.display = "none";

const musica = document.getElementById("musicaFondo");

if(musica){
    musica.play();
}
```

});
