document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
     <div class="top-nav" id="home">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-auto">
            <p><i class="bx bxs-envelope"></i> info@edenva.mx</p>
            <p><i class="bx bxs-phone-call"></i> +52 322 147 3221</p>
          </div>
          <div class="col-auto social-icons">
            <a href="https://www.facebook.com/edenvamx/"><i class="bx bxl-facebook"></i></a>
            <a href="https://www.youtube.com/@eledendevallarta3853"><i class="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/edenva.mx/"><i class="bx bxl-instagram"></i></a>
            
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM NAV -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">Edenva<span class="dot">.</span></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tours">Tours</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contacto">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/FAQ">FAQ'S</a>
            </li>
          </ul>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn btn-brand ms-lg-3"
            >Reserva!</a
          >
        </div>
      </div>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbar;
});
