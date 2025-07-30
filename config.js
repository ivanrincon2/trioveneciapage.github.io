window.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
const form = document.getElementById('formContacto');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      mensajeConfirmacion.style.display = 'block';
      form.reset();
    } else {
      alert('Oops! Algo salió mal, intenta de nuevo.');
    }
  } catch (error) {
    alert('Error al enviar el formulario. Intenta más tarde.');
  }
});
