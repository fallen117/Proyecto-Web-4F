// =========================
// FUNCIONES INTERACTIVAS
// =========================

// Ejemplo simple: mostrar alerta al hacer clic en "Ver más"
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert('Función en desarrollo: próximamente podrás explorar más productos.');
  });
});

// Mi carrito - Incrementador de cantidad
document.querySelectorAll('.product-actions-number').forEach(container => {
  const countSpan = container.querySelector('.count');
  const incrementBtn = container.querySelector('.increment');
  const decrementBtn = container.querySelector('.decrement');

  incrementBtn.addEventListener("click", () => {
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  });

  decrementBtn.addEventListener("click", () => {
    const current = parseInt(countSpan.textContent);
    if (current > 1) countSpan.textContent = current - 1;
  });
});

document.querySelectorAll('.quantity-control').forEach(container => {
  const countSpan = container.querySelector('.count');
  const incrementBtn = container.querySelector('.increment');
  const decrementBtn = container.querySelector('.decrement');

  incrementBtn.addEventListener("click", () => {
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  });

  decrementBtn.addEventListener("click", () => {
    const current = parseInt(countSpan.textContent);
    if (current > 1) countSpan.textContent = current - 1;
  });
});




// LOGIN SCRIPT TEST


window.addEventListener("DOMContentLoaded", () => {

    const nombreUsuario = localStorage.getItem("name-user");

    document.getElementById("mostrar-name-user").textContent = nombreUsuario;

    validarUsuario("login-start");
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreUsuario = document.getElementById("name-user").value;
    localStorage.setItem("name-user", nombreUsuario);

    alert("Usuario ingresado correctamente.")
    window.location.href="index.html"
});

function validarUsuario(idElemento) {
  // Obtenemos el valor desde localStorage
  const nombreUsuario = localStorage.getItem("name-user");

  // Validamos si tiene texto (no null, no undefined, no vacío, no solo espacios)
  if (nombreUsuario && nombreUsuario.trim() !== "") {
    const elemento = document.getElementById(idElemento);
    const cerrarSesion = document.getElementById("login-close")

    if (elemento, cerrarSesion) {
      elemento.style.display = "none"; 
      cerrarSesion.style.display = "inline"
      
    } else {
      console.warn(`No se encontró ningún elemento con el id: ${idElemento}`);
      elemento.style.display = "none"; 
      cerrarSesion.style.display = "inline";
    }
  } else {
    console.log("No se ingresó ningún nombre de usuario en 'name-user'");
  }
}

function cerrarSesion(){
    window.location.href="login.html"
}