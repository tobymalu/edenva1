document.querySelectorAll(".language-switch").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace

    const lang = btn.dataset.lang; // Obtiene el idioma seleccionado (es o en)
    const currentPath = window.location.pathname; // Obtiene la ruta actual

    // Validación para evitar duplicar el idioma en la URL
    if (
      (lang === "en" && currentPath.startsWith("/en")) ||
      (lang === "es" && !currentPath.startsWith("/en"))
    ) {
      // Ya está en la versión correcta, no redirige
      return;
    }

    // Cambia la ruta según el idioma seleccionado
    const newPath =
      lang === "en"
        ? `/en${currentPath.replace("/en", "")}` // Agrega "/en" si no está
        : currentPath.replace("/en", ""); // Remueve "/en" si regresa a español

    // Redirige a la nueva URL
    window.location.href = newPath;
  });
});
