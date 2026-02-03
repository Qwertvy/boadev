window.onload = function () {
  $("#centrado").fadeOut();
  $("body").removeClass("hidden");
};

let indice = 0;
const tarjetas = document.querySelectorAll(".tarjeta");
const totalTarjetas = tarjetas.length;

document.getElementById("next-btn").addEventListener("click", () => {
  tarjetas[indice].classList.remove("activa");
  indice = (indice + 1) % totalTarjetas;
  tarjetas[indice].classList.add("activa");
});

document.getElementById("prev-btn").addEventListener("click", () => {
  tarjetas[indice].classList.remove("activa");
  indice = (indice - 1 + totalTarjetas) % totalTarjetas;
  tarjetas[indice].classList.add("activa");
});

// Mostrar la primera tarjeta al cargar la página
tarjetas[indice].classList.add("activa");


