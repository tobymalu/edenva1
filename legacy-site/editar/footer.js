document.addEventListener("DOMContentLoaded", () => {
  const footer = `
    <footer>
      <div class="footer-top text-center">
        <div class="footer" style="background: none">
          <!-- Sección Izquierda: Información de Contacto -->
          <div class="footer-section" style="opacity: 0.5">
            <h6>Correo Electrónico:</h6>
            <p>info@edenva.mx</p>
            <h6>Teléfono:</h6>
            <p>+52 322 147 3221</p>
            <div class="footer-logo">
              <img src="/img/favicon/web-app-manifest-192x192.png" alt="Logo" />
            </div>
          </div>

          <!-- Sección Central: Cláusulas y Términos -->
          <div class="footer-section">
            <h6>Cláusulas de Confidencialidad</h6>
            <p>
              Tomamos su privacidad muy en serio y tomaremos todas las medidas
              para proteger su información personal.
            </p>
            <h6>Copyright ©</h6>
            <p>Todos los derechos reservados, 2024.</p>
            <h6>Términos y Condiciones</h6>
            <p>
              <a href="/TyC" class="terms-button"
                >Lee nuestros términos y condiciones aquí.</a
              >
            </p>
          </div>

          <!-- Sección Derecha: Redes Sociales -->
          <div class="footer-section">
            <h6>Síguenos en Redes Sociales</h6>
            <div class="social-icons">
              <a
                href="https://www.facebook.com/edenvamx/"
                target="_blank"
                aria-label="Facebook"
                ><i class="fab fa-facebook"></i
              ></a>
              <a
                href="https://www.instagram.com/edenva.mx/"
                target="_blank"
                aria-label="Instagram"
                ><i class="fab fa-instagram"></i
              ></a>

              <a
                href="https://www.youtube.com/@eledendevallarta3853"
                target="_blank"
                aria-label="YouTube"
                ><i class="fab fa-youtube"></i
              ></a>
            </div>
          </div>
        </div>
  `;

  document.getElementById("footer").innerHTML = footer;
});
