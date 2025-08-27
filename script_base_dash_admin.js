document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-open");
  const sidebar = document.getElementById("sidebar");
  const menuLinks = document.querySelectorAll(".menu a");

  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  menuBtn.addEventListener("click", () => {
    const mobile = isMobile();

    // Toggle la misma clase .open en ambos modos
    sidebar.classList.toggle("open");

    if (mobile) {
      // En móvil queremos que el icono se convierta en X y bloquear scroll body
      const open = sidebar.classList.contains("open");
      menuIcon.classList.toggle("active", open);
      document.body.classList.toggle("sidebar-open-overlay", open);
    } else {
      // En desktop/tablet NO queremos la X (sólo expandir/colapsar)
      menuIcon.classList.remove("active");
      document.body.classList.remove("sidebar-open-overlay");
    }
  });

  // Al click en link: solo cerrar si es móvil (comportamiento overlay)
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (isMobile()) {
        sidebar.classList.remove("open");
        menuIcon.classList.remove("active");
        document.body.classList.remove("sidebar-open-overlay");
      }
    });
  });

  // Cerrar overlay si se hace click fuera del sidebar (solo en móvil)
  document.addEventListener("click", (e) => {
    if (!isMobile()) return;
    if (!sidebar.classList.contains("open")) return;

    const clickInside = sidebar.contains(e.target) || menuBtn.contains(e.target);
    if (!clickInside) {
      sidebar.classList.remove("open");
      menuIcon.classList.remove("active");
      document.body.classList.remove("sidebar-open-overlay");
    }
  });

  // Al cambiar de tamaño, limpiamos estados incompatibles
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      // Dejar en modo desktop: colapsado por defecto (quita overlay/X)
      sidebar.classList.remove("open");
      menuIcon.classList.remove("active");
      document.body.classList.remove("sidebar-open-overlay");
    }
  });
});
