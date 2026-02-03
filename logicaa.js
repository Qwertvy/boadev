// LOADER GLOBAL (para todas las páginas)
window.addEventListener("load", () => {
  const loader = document.getElementById("centrado");

  // Habilitar scroll
  document.body.classList.remove("hidden");

  // Ocultar loader con pequeña animación
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.4s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 400);
    }
  }, 1200);
});
// ANIMACIÓN AL HACER SCROLL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animar").forEach((el) => {
  observer.observe(el);
});
// ===============================
// VALIDACIONES FORMULARIO CONTACTO
// ===============================
const form = document.querySelector(".formulario");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const mensaje = form.querySelector("textarea");

    let valido = true;

    // Reset estilos
    [nombre, email, mensaje].forEach((campo) => {
      campo.classList.remove("error");
    });

    // Nombre
    if (nombre.value.trim().length < 3) {
      marcarError(nombre, "El nombre debe tener al menos 3 caracteres");
      valido = false;
    }

    // Email
    if (!emailValido(email.value)) {
      marcarError(email, "Introduce un correo válido");
      valido = false;
    }

    // Mensaje
    if (mensaje.value.trim().length < 10) {
      marcarError(mensaje, "El mensaje debe tener al menos 10 caracteres");
      valido = false;
    }

    if (valido) {
      mostrarExito();
      form.reset();
    }
  });
}

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function marcarError(input, mensaje) {
  input.classList.add("error");
  input.placeholder = mensaje;
  input.value = "";
}

function mostrarExito() {
  const alerta = document.createElement("div");
  alerta.className = "mensaje-exito";
  alerta.textContent = "✅ Mensaje enviado correctamente";
  document.body.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}
