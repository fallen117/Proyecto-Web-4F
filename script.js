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
 const countSpan = document.getElementById("count");
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");

  incrementBtn.addEventListener("click", () => {
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  });

  decrementBtn.addEventListener("click", () => {
    const current = parseInt(countSpan.textContent);
    if (current > 1) countSpan.textContent = current - 1;
  });